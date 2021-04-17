export interface Menu {
    titulo:String;
    subMenus:SubMenu[];
}

export interface SubMenu {
    titulo:String;
    url:String;
}