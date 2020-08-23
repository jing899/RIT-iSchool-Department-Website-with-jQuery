<?php
//include the header
$path = './';
include $path.'assets/inc/header.php';
?>

<div id="introduction"></div>

<div id="degreeStats"></div>
<div id="box">
    <div id="employers"></div>
    <div id="careers"></div>
</div>

<div id="map">
    <h2>Where Our Students Work</h2>
    <iframe src="https://ist.rit.edu/api/map.php" id="imap"></iframe>
</div>

<div id="tables">
    <button id="coopButton" class="buttons pure-button">Co-op Table</button>
    <button id="proButton" class="buttons pure-button">Professional Employment Table</button>
</div>

<section class="footer"></section>

</body>
</html>