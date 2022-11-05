import * as React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import AppBarCustom from "../components/AppBarCustom";
import ActionAreaCard from "../components/ActionAreaCard";
import img from "../constants";

const Dashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <AppBarCustom />
      <div style={{ padding: 24, display: "flex", alignItems: "center" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Đơn bảo trì chưa xử lý"
              quantity="1"
              img={img.fix}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Nhân viên hoạt động"
              quantity="1"
              img={img.employeeImg}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Khách hàng hoạt động"
              quantity="1"
              img={img.client}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Tổng doanh thu"
              quantity="1"
              img={img.money}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Đánh giá từ khách hàng"
              quantity="1"
              img={img.rate}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Dashboard;
