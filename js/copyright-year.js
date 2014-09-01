 jQuery(document).ready(function() { 
        var strStart = '2014'; 
        var strYear = new Date(); 
        if (strStart == strYear.getFullYear()) { jQuery("#copyright_year").html(strStart); } 
        else { jQuery("#copyright_year").html(strStart + '-' + strYear.getFullYear());</script>
        <script>
                $(window).load(function() {
                $('img.caption').captionjs({
                    'class_name'      : 'captionjs', // Class name assigned to each <figure>
                    'schema'          : true,        // Use schema.org markup (i.e., itemtype, itemprop)
                    'mode'            : 'hide',   // default | static | animated | hide
                    'debug_mode'      : false,       // Output debug info to the JS console
                    'force_dimensions': false        // Force the dimensions in case they can't be detected (e.g., image is not yet painted to viewport)
                });
            });