export interface NavigationLink {
    name: string;
    url: string;
    hasChildren?: boolean;
    children?: ChildNavigationLink[];
}

export interface ChildNavigationLink {
    name: string;
    url: string;
}
