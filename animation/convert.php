<?
  /*
   * 
   * This file takes all php files from the current directory and coverts
   * them to html files
   *   
   */  
  
  $dir = getcwd();
  // Open a known directory, and proceed to read its contents
  if (is_dir($dir)) {
      if ($dh = opendir($dir)) {
          while (($file = readdir($dh)) !== false) {
             if(strpos($file,".php") && $file !== "convert.php"){
                //create matches array
                preg_match("/(.*)\.php/", $file, $matches);
                $filename = $matches[1];
                $html_file = fopen($filename.".html","wb") or die("unable to open file!");
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_HEADER, 0);
                curl_setopt($ch, CURLOPT_URL, $_SERVER['HTTP_HOST'] . "/" . $file);
                curl_setopt($ch, CURLOPT_FILE, $html_file); 
                if(curl_exec($ch)){
                  echo "<div style='color:green'>Successfully converted <strong>". $file . "</strong></div>"; 
                }
                curl_close($ch);
                
             }
          }
          closedir($dir);
      }
  }
  
?>