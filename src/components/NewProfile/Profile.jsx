import classes from "./newprofile.module.css";
import Avatar from "@mui/material/Avatar";
import { Container, Box } from "@mui/material";
import { Link } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";

const Profile = (props) => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.containerMd}>
        <Container>
          <Box
            sx={{ bgcolor: "white", height: "150px", borderRadius: "0.3em" }}
          >
            <div className="container-fluid">
              <div className="row justify-content-end">
                <div class="col-2">
                  <button
                    type="submit"
                    class="btn shadow-none"
                    style={{ marginTop: "0.2em" }}
                  >
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                </div>
              </div>
              <div class="row justify-content-start">
                <div class="col-3" style={{ marginRight: "1.5em" }}>
                  <Avatar sx={{ width: "85px", height: "85px" }} />
                </div>
                <div class="col-7">
                  <span className={classes.uname}>
                    <b>Username</b>
                  </span>
                  <div class="row justify-content-center">
                    <div class="col-7">
                      <Link underline="none">
                        <span className={classes.mainfollowers}>
                          <b>Followers</b>
                        </span>
                      </Link>
                    </div>
                    <div class="col-5">
                      <Link underline="none">
                        {" "}
                        <span className={classes.mainfollowing}>
                          <b>Following</b>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div class="row justify-content-end">
                    <div class="col">
                      <span className={classes.followercount}><b>0</b></span>
                    </div>
                    <div class="col">
                      <span className={classes.followingcount}><b>0</b></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          <Box sx={{ height: "30px", backgroundColor: "#05386B" }}></Box>
          <Box
            sx={{ bgcolor: "white", height: "360px", borderRadius: "0.3em" }}
          >
            <div class="row">
              <span className={classes.genres}>
                <b>Intrested Geners</b>
              </span>
              <hr className={classes.hr} />
              <div class="col" style={{ marginLeft: "1.2em" }}>
                Technology, Coding
              </div>

              <span className={classes.email}>
                <b>Email</b>
              </span>
              <hr className={classes.hr} />
              <div class="col" style={{ marginLeft: "1.2em" }}>
                group8@gmail.com
              </div>
              <br />
              <span className={classes.bio}>
                <b>Bio</b>
              </span>
              <hr className={classes.hr} />
              <div
                class="col"
                style={{ marginLeft: "1.2em", overflowY: "auto" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                mattis sed velit eget fringilla.
              </div>

              <br />
            </div>
            <div class="col">
              <div className={classes.custombtn}>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    backgroundColor: "#8ee4af",
                    color: "black",
                    width: "290px",
                  }}
                >
                  <span style={{ paddingRight: "1em" }}>
                    <b>Follow</b>
                  </span>
                </button>
              </div>
            </div>
          </Box>
        </Container>
        <br />
      </div>
    </div>
  );
};

export default Profile;
