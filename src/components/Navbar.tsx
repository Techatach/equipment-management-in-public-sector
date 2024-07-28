"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/productlist">
                ครุภัณฑ์คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฎจันทรเกษม
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="flex justify-start items-center gap-5">
                <Link href="/productlist">หน้าหลัก</Link>
                <Link href="/productlist">รายการครุภัณฑ์</Link>
                <Link href="/AddProduct">กรอกรายการครุภัณฑ์</Link>
              </div>
            </Typography>
            <Button color="inherit">LogIn</Button>
            <Button color="inherit">SignUp</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
