<Box
display="flex"
// flexDirection="row"
flexDirection="row"
p={0}
m={0}
bgcolor="transparent"
// color="white"
sm={12}
>
<Box
  sm={6}
  p={1}
  mt={0}
  style={{ width: "100%", minHeight: "40rem" }}
  bgcolor="transparent"
  border={1}
  borderColor="green"
>
  <Izquierda />
  {/* <Typography variant="h3" display="block" gutterBottom>
    Seccion Izq
  </Typography> */}
</Box>
<Box
  sm={6}
  p={1}
  mt={0}
  style={{ width: "100%" }}
  bgcolor="transparent"
  border={1}
  borderColor="green"
>
  <Derecha />
</Box>
</Box>
<Box
display="flex"
// flexDirection="row"
flexDirection="column"
p={0}
m={0}
bgcolor="white"
color="white"
sm={12}
>
<Box sm={12} p={1} mt={0} style={{ width: "100%" }} bgcolor="#ef744c">
  <Typography variant="h3" display="block" gutterBottom>
    Primer Seccion
  </Typography>
</Box>
<Box p={1} mt={0} style={{ width: "100%" }} bgcolor="#cf5636">
  <Typography variant="caption" display="block" gutterBottom>
    Segunda Seccion
  </Typography>
</Box>
<Box p={1} mt={"3px"} style={{ width: "100%" }} bgcolor="#4f4947">
  <Typography variant="caption" display="block" gutterBottom>
    Tercer Seccion
  </Typography>
</Box>
</Box>
