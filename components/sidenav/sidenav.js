(function ($) {

    $.fn.qiiSidenav = function (option) {
        var jqObj = this;
        // console.log("Option passed : ", option);
        // // This is the easiest way to have default options.
        var defaultSettings = qiiSidenav ? qiiSidenav : {};
        var settings = $.extend(defaultSettings, option);

        createComponent();

        function createMenuItem(menuItem,parentOpen) {
            var menuString = "";
            var isOpen = settings.openTrees.indexOf(menuItem.id)>-1?true:false;
            var isActive = settings.activeLinks.indexOf(menuItem.id)>-1?true:false;
            var hasChildren = (menuItem.children && menuItem.children.length && menuItem.children.length > 0) ? true : false;
            menuString = '<li id="' + menuItem.id + '" class="' + (isActive ? "active " : "") + (hasChildren ? ("treeview "+(isOpen?" menu-open":"")) : "") + '">';
            if (!hasChildren) {
                menuString += '<a href="' + menuItem.href + '"><i class="' + menuItem.iconClass + '"></i> <span>' + menuItem.name + '</span></a>';
            }
            else {
                menuString += '<a href="'+menuItem.href+'"><i  class="'+menuItem.iconClass+'"></i> <span>'+menuItem.name+'</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>';
                menuString += '<ul class="treeview-menu" style="display:'+(isOpen?"block":"none")+'">';
                //iterate child
                for(var i=0;i<menuItem.children.length;i++){
                    menuString+=createMenuItem(menuItem.children[i],parentOpen);
                }
                menuString += '</ul>';
            }
            menuString += "</li>";
            return menuString;

        }

        function createComponent() {
            var componentHtml = '<aside class="main-sidebar"> <!-- sidebar: style can be found in sidebar.less --> <section class="sidebar"> <!-- Sidebar user panel (optional) --> <!-- search form (Optional) --> <!-- /.search form --> <!-- Sidebar Menu --> <ul class="sidebar-menu" data-widget="tree">';
            //for loop : iterate through menu items
            for (var i = 0; i < settings.sideMenu.length; i++) {
                componentHtml += createMenuItem(settings.sideMenu[i]);
            }
            componentHtml += '</ul><!-- /.sidebar-menu --></section><!-- /.sidebar --></aside>';
            jqObj.html(componentHtml);
        }
        return this;
    };
}(jQuery));