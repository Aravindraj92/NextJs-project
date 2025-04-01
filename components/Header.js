"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import { UserLogout } from "../app/action";

const pages = ["products", "blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  // const cookieStore = await cookies();
  React.useEffect(() => {
    setToken(localStorage.getItem("isLogin") || "");
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter();
  const logout = async () => {
    console.log("iam in");
    const result = await UserLogout();
    if (result.success) {
      localStorage.removeItem("isLogin");
      router.push("/login");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              {" "}
              <HomeIcon />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link href={`/${page}`} key={page}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {token ? (
                <form action={logout}>
                  {/* <Link href="/login"> */}{" "}
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    type="submit"
                  >
                    Logout
                  </Button>
                  {/* </Link> */}
                </form>
              ) : (
                <>
                  {" "}
                  <Link href="/login"> Login</Link>
                  <Link href="/signup"> SignUp</Link>
                </>
              )}

              {/* <div className="pr-10"></div> */}

              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
              {/* <Link href="/login">
            <Button
               onClick={handleOpenUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Login
              </Button>
              </Link>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>*/}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
