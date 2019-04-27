(function ($) {

    $.fn.qiiHeader = function (option) {
        var jqObj = this;
        // console.log("Option passed : ", option);
        // // This is the easiest way to have default options.
        var defaultSettings = qiiHeader ? qiiHeader : {};
        var settings = $.extend(defaultSettings, option);

        createQiiHeader();

        function createQiiHeader() {
            var htmlInline = '<header class="main-header"> <!-- Logo --> <a href="QubeIndex.html" class="logo"> <!-- mini logo for sidebar mini 50x50 pixels --> <span class="logo-mini"><b>QII</b></span> <!-- logo for regular state and mobile devices --> <span class="logo-lg"><b>Q</b>ube<b>I</b>nfra<b>I</b>nsight</span> </a> <!-- Header Navbar --> <nav class="navbar navbar-static-top" role="navigation"> <!-- Sidebar toggle button--> <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button"> <span class="sr-only">Toggle navigation</span> </a> <!-- Navbar Right Menu --> <div class="navbar-custom-menu"> <ul class="nav navbar-nav"> <!-- User Account Menu --> <li class="dropdown user user-menu"> <!-- Menu Toggle Button --> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <!-- The user image in the navbar--> <img src="../../dist/img/user2-160x160.jpg" class="user-image" alt="User Image"> <!-- hidden-xs hides the username on small devices so only the image appears. --> <span class="hidden-xs"></span> </a> <ul class="dropdown-menu"> <!-- The user image in the menu --> <li class="user-header"> <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"> <p> <small></small> </p> </li> <!-- /.row --> </li> <!-- Menu Footer--> <li class="user-footer"> <div class="pull-left"> <a href="#" class="btn btn-default btn-flat">Profile</a> </div> <div class="pull-right"> <a href="#" class="btn btn-default btn-flat">Sign out</a> </div> </li> </ul> </div> </nav> </header>';
            jqObj.html(htmlInline);
        }
        return this;
    };
}(jQuery));