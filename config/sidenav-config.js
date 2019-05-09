var qiiSidenav = {
    activeLinks: [],
    openTrees: [],
    sideMenu: [{
            id: "qii_menu_dashboard",
            name: "Dashbord",
            iconClass: "fa fa-link",
            href: "/pages/home",
            children: []
        },
        {
            id: "qii_menu_organization",
            name: "Organization",
            iconClass: "fa fa-link",
            href: "/pages/organization",
            children: []
        },
        {
            id: "qii_menu_project_office",
            name: "Project Office",
            iconClass: "fa fa-link",
            href: "#",
            children: [{
                id: "qii_menu_customer",
                name: "Customer",
                iconClass: "fa fa-address-book-o",
                href: "/pages/project-office",
                children: []
            }, {
                id: "qii_menu_site",
                name: "Site",
                iconClass: "fa fa-building",
                href: "/pages/project-office/create-site.html",
                children: []
            }]
        },
        {
            id: "qii_menu_purchase_office",
            name: "Purchase Office",
            iconClass: "fa fa-link",
            href: "#",
            children: [{
                    id: "qii_menu_vendormanagement",
                    name: "Vendor Management",
                    iconClass: "fa fa-link",
                    href: "/pages/purchase-office/vendormanagement.html",
                    children: []
                },
                {
                    id: "qii_menu_purchasedemand",
                    name: "Purchase Damand",
                    iconClass: "fa fa-link",
                    href: "/pages/purchase-office/purchasedemand.html",
                    children: []
                },
                {
                    id: "qii_menu_purchaseorder",
                    name: "Purchase Order",
                    iconClass: "fa fa-link",
                    href: "/pages/purchase-office/purchaseorder.html",
                    children: []
                },
                {
                    id: "qii_menu_goodsreceived",
                    name: "Goods Received",
                    iconClass: "fa fa-link",
                    href: "/pages/purchase-office/goodsreceived.html",
                    children: []
                },
                {
                    id: "qii_menu_invoice",
                    name: "Invoice",
                    iconClass: "fa fa-link",
                    href: "/pages/purchase-office/invoice.html",
                    children: []
                }
            ]
        },
        {
            id: "qii_menu_inventory_management",
            name: "Inventory Management",
            iconClass: "fa fa-link",
            href: "#",
            children: [{
                    id: "qii_menu_assetmaster",
                    name: "Asset Master",
                    iconClass: "fa fa-link",
                    href: "/pages/inventory-management/assetmaster.html",
                    children: []
                },
                {
                    id: "qii_menu_materialmaster",
                    name: "Material Master",
                    iconClass: "fa fa-link",
                    href: "/pages/inventory-management/materialmaster.html",
                    children: []
                }
            ]
        }
    ]
};