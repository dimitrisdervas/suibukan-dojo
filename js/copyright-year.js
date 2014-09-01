 $(document).ready(function() { 
        var strStart = '2014'; 
        var strYear = new Date(); 
        if (strStart == strYear.getFullYear()) { 
            $("#copyright_year").html(strStart); 
        } 
        else { 
            $("#copyright_year").html(strStart + '-' + strYear.getFullYear()); 
        }
 });

