<section id="charts">
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-lime" data-click="panel-expand" data-original-title="" title=""><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse" data-original-title="" title=""><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove" data-original-title="" title=""><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">Amount of ignition a day<small>Last uploaded stats</small></h4>
        </div>
        <div class="panel-body">
            <div class="panel-option">
                <div class="pull-right">
                    <a href="javascript:;" class="btn btn-danger btn-rounded btn-sm" data-toggle="dropdown" id="ignitionButton">Clear</a>
                </div>
                <div class="dropdown pull-right">
                    <a href="javascript:;" class="btn btn-white btn-rounded btn-sm" data-toggle="dropdown">Graph <b class="caret"></b></a>
                    <ul id="ignitionChartSortable" class="dropdown-menu">
                        <li id = "linechartIgnition"><a>Linechart</a></li>
                        <li id = "columnchartIgnition"><a>Columnchart</a></li>
                    </ul>
                </div>
                <div class="dropdown pull-right">
                    <a href="javascript:;" class="btn btn-white btn-rounded btn-sm" data-toggle="dropdown">UnitID <b class="caret"></b></a>
                    <ul id="ignitionSortable" class="dropdown-menu">
                        @foreach ($ignitionids as $id)
                            <li id= "{{$id->unit_id}}"><a>{!!$id->unit_id!!}</a></li>
                        @endforeach
                    </ul>
                </div>
                <div class="text-ellipsis">{{\Carbon\Carbon::today()->format('d-m-Y')}}</div>

            </div>
            <div>
                <div id = "ignitionLineChart"  style="visibility: hidden" ></div>
                <div id = "ignitionColumnChart"  style="visibility: hidden"></div>
            </div>
        </div>
    </div>

    <div class="panel panel-inverse">
        <div class="panel-heading">
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-lime" data-click="panel-expand" data-original-title="" title=""><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse" data-original-title="" title=""><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove" data-original-title="" title=""><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">Average speed<small>Last uploaded stats</small></h4>
        </div>
        <div class="panel-body">
            <div class="panel-option">
                <div class="pull-right">
                    <a href="javascript:;" class="btn btn-danger btn-rounded btn-sm" data-toggle="dropdown" id="speedButton">Clear</a>
                </div>
                <div class="dropdown pull-right">
                    <a href="javascript:;" class="btn btn-white btn-rounded btn-sm" data-toggle="dropdown">Graph <b class="caret"></b></a>
                    <ul id="speedChartSortable" class="dropdown-menu">
                        <li id = "linechartSpeed"><a>Linechart</a></li>
                        <li id = "columnchartSpeed"><a>Columnchart</a></li>
                    </ul>
                </div>
                <div class="dropdown pull-right">
                    <a href="javascript:;" class="btn btn-white btn-rounded btn-sm" data-toggle="dropdown">UnitID <b class="caret"></b></a>
                    <ul id="speedSortable" class="dropdown-menu">
                        @foreach ($speedids as $id)
                            <li id= "{{$id->unit_id}}"><a>{!!$id->unit_id!!}</a></li>
                        @endforeach
                    </ul>
                </div>
                <div class="text-ellipsis">{{\Carbon\Carbon::today()->format('d-m-Y')}}</div>
            </div>
            <div>
                <div id = "speedLineChart"  style="visibility: hidden"></div>
                <div id = "speedColumnChart"  style="visibility: hidden"></div>
            </div>
        </div>
    </div>

    <div class="panel panel-inverse">
        <div class="panel-heading">
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-lime" data-click="panel-expand" data-original-title="" title=""><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse" data-original-title="" title=""><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove" data-original-title="" title=""><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">Connection quality<small>Last uploaded stats</small></h4>
        </div>
        <div class="panel-body">
            <div class="panel-option">
                <div class="pull-right">
                    <a href="javascript:;" class="btn btn-danger btn-rounded btn-sm" data-toggle="dropdown" id="connectionButton">Clear</a>
                </div>
                <div class="dropdown pull-right">
                    <a href="javascript:;" class="btn btn-white btn-rounded btn-sm" data-toggle="dropdown">Graph <b class="caret"></b></a>
                    <ul  id="connectionChartSortable" class="dropdown-menu">
                        <li id = "linechartConnection"><a>Linechart</a></li>
                        <li id = "columnchartConnection"><a>Columnchart</a></li>
                    </ul>
                </div>
                <div class="dropdown pull-right">
                    <a href="javascript:;" class="btn btn-white btn-rounded btn-sm" data-toggle="dropdown">UnitID <b class="caret"></b></a>
                    <ul id="connectionSortable" class="dropdown-menu">
                        @foreach ($connectionids as $id)
                            <li id= "{{$id->unit_id}}"><a>{!!$id->unit_id!!}</a></li>
                        @endforeach
                    </ul>
                </div>
                <div class="text-ellipsis">{{\Carbon\Carbon::today()->format('d-m-Y')}}</div>
            </div>
            <div>
                <div id = "connectionLineChart"  style="visibility: hidden"></div>
                <div id = "connectionColumnChart"  style="visibility: hidden"></div>
            </div>
        </div>
    </div>
</section>

<section id="upload">
    <div class="row">
        <div class="col-lg-4">
            <div class="panel panel-inverse">
                <div class="panel-heading">
                    <div class="panel-heading-btn">
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-lime" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                    </div>
                    <h4 class="panel-title">CityGis Data Upload Section</h4>
                </div>
                <div class="panel-body">
                    {!! Form::open(['id' => 'upload-form', 'files'=>true]) !!}
                    @if(Session::has('message'))
                        <script>
swal("{!! Session::get('message') !!}");
                        </script>
            @endif
            <div class="panel-title">Geaccepteerde csv files:</div>
            <div class="panel-body">
                <ul>
                    <li>Connections.csv</li>
                    <li>Positions.csv</li>
                    <li>Events.csv</li>
                    <li>Monitoring.csv</li>
                </ul>
            </div>
            <label for="upload">Selecteer uw file:</label>
            <input type="file" class="filestyle" name="file" id="upload" data-icon="false">
            </br>
            <button type="submit" class="btn btn-primary">Upload</button>
            {!! Form::close() !!}
                </div>
            </div>
        </div>

        <!-- <div class="col&#45;lg&#45;4"> -->
        <!--     <div class="panel panel&#45;inverse"> -->
        <!--         <div class="panel&#45;heading"> -->
        <!--             <div class="panel&#45;heading&#45;btn"> -->
        <!--                 <a href="javascript:;" class="btn btn&#45;xs btn&#45;icon btn&#45;circle btn&#45;lime" data&#45;click="panel&#45;expand"><i class="fa fa&#45;expand"></i></a> -->
        <!--                 <a href="javascript:;" class="btn btn&#45;xs btn&#45;icon btn&#45;circle btn&#45;warning" data&#45;click="panel&#45;collapse"><i class="fa fa&#45;minus"></i></a> -->
        <!--                 <a href="javascript:;" class="btn btn&#45;xs btn&#45;icon btn&#45;circle btn&#45;danger" data&#45;click="panel&#45;remove"><i class="fa fa&#45;times"></i></a> -->
        <!--             </div> -->
        <!--             <h4 class="panel&#45;title">Recent Uploads</h4> -->
        <!--         </div> -->
        <!--         <div class="panel&#45;body recent&#45;uploads"> -->
        <!--             <ul class="feeds"> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">Uploaded file <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--                 <li> -->
        <!--                     <a href="javascript:;"> -->
        <!--                         <div class="icon bg&#45;warning&#45;light"><i class="fa fa&#45;file&#45;text"></i></div> -->
        <!--                         <div class="time">20 mins</div> -->
        <!--                         <div class="desc">New pending invoice <span class="label label&#45;inverse m&#45;l&#45;5">INV&#45;910129</span></div> -->
        <!--                     </a> -->
        <!--                 </li> -->
        <!--             </ul> -->
        <!--         </div> -->
        <!--     </div> -->
        <!-- </div> -->
    </div>
</section>
@linechart('ignitionLineChart', 'ignitionLineChart')
@columnchart('ignitionColumnChart', 'ignitionColumnChart')

@linechart('connectionLineChart', 'connectionLineChart')
@columnchart('connectionColumnChart', 'connectionColumnChart')

@linechart('speedLineChart', 'speedLineChart')
@columnchart('speedColumnChart', 'speedColumnChart')