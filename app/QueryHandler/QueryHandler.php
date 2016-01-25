<?php

namespace App\QueryHandler;

class QueryHandler
{

    public function getUnitIds($table){

        $UnitIds = \DB::table($table)
            ->select('unit_id')
            ->groupBy('unit_id')
            ->orderBy('unit_id', 'asc')
            ->get();

        return $UnitIds;
    }

    public function getSingleDatabaseData($dataDetails){

        $connection = \DB::table($dataDetails)
            ->select(\DB::raw('SUBSTRING(date_time,0,11) AS days'),
                \DB::raw('SUM(CAST(value AS INT)) AS values'))
                ->groupBy('days')
                ->orderBy('days', 'asc')
                ->get();

        return $connection;

    }

    public function getMultiDatabaseData($dataDetails, $UnitIds){

        $table = $this->tableChecker($dataDetails);


        if($table == 'positions'){
            $connection = \DB::table($table)
                ->select(\DB::raw('SUBSTRING(date_time,0,11) AS days'),
                    \DB::raw('ROUND(AVG(speed),0) AS values'),
                    'unit_id' )
                ->where('unit_id', '=', $UnitIds)
                ->groupBy('days', 'unit_id')
                ->orderBy('days', 'asc')
                ->get();
             return $connection;
        }else {
            $connection = \DB::table($table)
                ->select(\DB::raw('SUBSTRING(date_time,0,11) AS days'),
                    \DB::raw('SUM(CAST(value AS INT)) AS values'),
                    'unit_id', 'port')
                ->where('unit_id', '=', $UnitIds)
                ->where('port', '=', $dataDetails)
                ->groupBy('days', 'unit_id', 'port')
                ->orderBy('days', 'asc')
                ->get();

            return $connection;
        }
    }

    public function tableChecker($dataDetails){

        if($dataDetails == 'Ignition'){
            $ChartTable = 'events';
            return $ChartTable;
        }

        if($dataDetails == 'Speed'){
            $ChartTable = 'positions';
            return $ChartTable;
        }

        if($dataDetails == 'Connection'){
            $ChartTable = 'connections';
            return $ChartTable;
        }
    }

}
