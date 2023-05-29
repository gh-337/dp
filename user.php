<?php
session_start();
if (isset($_SESSION['user'])){
    echo("Ви ввійшли як " . $_SESSION['user']['nick']);
}
else{
    echo("Ви не ввійшли");
}