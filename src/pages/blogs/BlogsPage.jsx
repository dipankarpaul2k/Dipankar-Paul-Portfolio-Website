import { Box } from "@mantine/core";
import { Folder } from "@phosphor-icons/react";

import classes from "./Blogs.module.css";
import Topbar from "../../components/Topbar";

const BlogsPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="Projects" icon={<Folder size={24} />} />
      <Box>
        <div>Blogs Page</div>
      </Box>
    </Box>
  );
};

export default BlogsPage;
