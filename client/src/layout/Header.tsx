import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useLocation } from "react-router-dom";
import { navbarConfig } from "./navbarData";
import { navbarItemsProps } from "@/types";

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
}

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [navItems, setNavItems] = React.useState(navbarConfig);
    const pathname = useLocation().pathname;

    // 選択されたpathを返す
    const selectedNavItem = (
        prevItems: navbarItemsProps[],
        pathName: string
    ) => {
        return prevItems.map((item) =>
            item.path === pathName
                ? { ...item, selected: true }
                : { ...item, selected: false }
        );
    };

    // リロードしたタイミングで選択されたパスをtrueにする。
    React.useEffect(() => {
        setNavItems((prevItems: navbarItemsProps[]) =>
            selectedNavItem(prevItems, pathname)
        );
    }, []);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    // ナビゲーションバーを選択された時の処理
    const handleSelectedNav = (selectedPath: string) => {
        setNavItems((prevItems: navbarItemsProps[]) =>
            selectedNavItem(prevItems, selectedPath)
        );
    };

    const navbar = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            style={{ color: "#696969" }}
                            onClick={() => handleSelectedNav(item.path)}
                        >
                            <ListItem
                                disablePadding
                                style={{
                                    ...(item.selected && {
                                        background: "#e6e6fa",
                                    }),
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <IconComponent />
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: "#ff7f50",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ letterSpacing: 1.5 }}
                    >
                        Read-Log
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {navbar}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {navbar}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                {/* 子要素のコンポーネント */}
                <Outlet />
            </Box>
        </Box>
    );
}
