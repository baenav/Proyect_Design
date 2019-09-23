<?php
$connect = mysqli_connect("db4free.net", "baenav", "qwertyuiop", "proyecto_diseno");
$query = '
SELECT P1, P2, P3, P4,
UNIX_TIMESTAMP(CONCAT_WS(" ", fecha, hora)) AS datetime
FROM datos
ORDER BY fecha DESC, hora DESC LIMIT 500
';
$result = mysqli_query($connect, $query);
$rows = array();
$table = array();

$table['cols'] = array(
 array(
  'label' => 'Date Time',
  'type' => 'datetime'
 ),
 array(
  'label' => 'Potencia 1',
  'type' => 'number'
 ),
 array(
  'label' => 'Potencia 2',
  'type' => 'number'
 ),
 array(
  'label' => 'Potencia 3',
  'type' => 'number'
 ),
 array(
  'label' => 'Potencia 4 ',
  'type' => 'number'
 )
);

while($row = mysqli_fetch_array($result)){
 $sub_array = array();
 $datetime = explode(".", $row["datetime"]);
 $sub_array[] =  array(
      "v" => 'Date(' . $datetime[0] . '000)'
     );
 $sub_array[] =  array(
      "v" => $row["P1"]
     );
 $sub_array[] = array(
      "v" => $row["P2"]
      );
 $sub_array[] = array(
      "v" => $row["P3"]
      );
 $sub_array[] = array(
      "v" => $row["P4"]
      );

 $rows[] =  array(
     "c" => $sub_array
    );
}
$table['rows'] = $rows;
echo json_encode($table);
?>
