export const MENU_ITEMS_LIST = [
  {
    id: "usuarios",
    title: "USUARIOS",
    activeSubMenu: 1,
    subRoles: [],
    headerItem: {
      num: 1,
      tooltipName: "USUARIOS",
      icon: "icon-look-check-flat",
    },
    items: [
      { name: "REVISION_DE_USUARIOS", role: "ROLE_PERMITE_REVISION_USUARIOS_C", route: "admon" },

    ]
  },
  {
    id: "campañas",
    title: "CAMPAÑAS",
    activeSubMenu: 2,
    subRoles: [],
    headerItem: {
      num: 2,
      tooltipName: "CAMPAÑAS",
      icon: "icon-notebook-flat",
    },
    items: [
      { name: "REGISTRAR_CAMPAÑA", role: "ROLE_SIN_DEFINIR", route: "donation" },
  
    ]
  },
  {
    id: "totalRecaudado",
    title: "TOTAL_RECAUDADO",
    activeSubMenu: 3,
    subRoles: [],
    headerItem: {
      num: 3,
      tooltipName: "TOTAL_RECAUDADO",
      icon: "icon-leaf-alt",
    },
    items: [
      { name: "RESUMEN_MES", role: "ROLE_SIN_DEFINIR", route: "summary" },

    ]
  }
];
