<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Shoujing Wu's new IST site</title>
        <link href="assets/css/style.css" type="text/css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
        <script src="assets/js/info.js" type="text/javascript"></script>

        <!--        google font-->
        <link href="https://fonts.googleapis.com/css?family=Lato|Montserrat:400,400i,500,600,700&display=swap" rel="stylesheet">

        <!--        click and pop up plug-in-->
        <link href="//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css" type="text/css" rel="stylesheet" />
        <script src="//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!--        accordion plug-in-->
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <link rel="stylesheet" href="jquery-ui-1.12.1.custom/jquery-ui.css">
        <script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>


        <!--        table plug-in-->
        <link href="//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css" type="text/css" rel="stylesheet"/>
        <script src="//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.js"></script>

        <link rel="stylesheet" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" type="text/css">
        <script src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>

        <!--        browser detection-->
        <script>
            var oldBrowser = false;

            if( oldBrowser ){
                alert("This is an old broswer, To use this page get a new one");
                window.document.location.href="http://outdatedbrowser.com/en";
            }
        </script>


    </head>
    <body>
        <nav>
            <ul>
                <li id="navTitle"><a>Information Sciences & Technologies @ RIT</a></li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">About  <i class="fa fa-caret-down"></i></a>
                    <div class="dropdown-content">
                        <a href="news.php" >News</a>
                        <a href="contact.php">Contact</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">People  <i class="fa fa-caret-down"></i></a>
                    <div class="dropdown-content">
                        <a href="faculty.php" >Faculty</a>
                        <a href="staff.php">Staff</a>
                    </div>
                </li>
                <li><a href="resources.php">Resources</a></li>
                <li><a href="research.php">Research</a></li>
                <li><a href="employment.php">Employment</a></li>

                <li><a href="index.php">Home</a></li>
            </ul>
        </nav>	
