var qiiSidenav = {
    activeLinks: []
    ,openTrees : []
    , sideMenu: [
        {
            id: "qii_menu_dashboard"
            , name: "Dashbord"
            , iconClass: "fa fa-link"
            , href: "../home"
            , children: []
        }
        , {
            id: "qii_menu_organization"
            , name: "Organization"
            , iconClass: "fa fa-link"
            , href: "#"
            , children: []
        },
        {
            id: "qii_menu_project_office"
            , name: "Project Office"
            , iconClass: "fa fa-link"
            , href: "#"
            , children: [
                {
                    id: "qii_menu_customer"
                    , name: "Customer"
                    , iconClass: "fa fa-address-book-o"
                    , href: "../project-office"
                    , children: []
                }
                ,{
                    id: "qii_menu_site"
                    , name: "Site"
                    , iconClass: "fa fa-building"
                    , href: "../project-office/create-site.html"
                    , children: []
                }
            ]
        }
    ]
};