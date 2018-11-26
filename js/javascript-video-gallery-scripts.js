$(document).ready(function(){
  $(".course").hide();
  $(".Header-nav-item:nth-child(2):before").addClass("glyphicon","glyphicon-user");
  $("#carousel a").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
  $("#abc-1").addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
  $("#respite-course-1").show();
  $(".course-video").load("inc/iframe/respite-video-part-one.php");
  $(".video-description").show();
           $("#abc-1").click(function(){
                $("#carousel a").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                
                $("#carousel.course-video").unload();
                $(".course").hide();
                $(".course-video").load("inc/iframe/respite-video-part-one.php");
                $("#respite-course-1").show();
        });
        $("#abc-2").click(function(){
                $("#carousel a").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#respite-course-2 .course-video").load("inc/iframe/respite-video-part-two.php");
                $("#respite-course-2").show();
        });
        $("#abc-3").click(function(){
                $("#carousel a").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#respite-course-3 .course-video").load("inc/iframe/respite-video-part-three.php");                
                $("#respite-course-3").show(); 
        });        
        $("#iwow-intro").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-1 .course-video").load("inc/iframe/iwow-what-are-invisible-wounds-video.php");                
                $("#iwow-course-1").show();     
        });
        $("#iwow-ptsd").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-2 .course-video").load("inc/iframe/iwow-what-is-ptsd-video.php");                
                $("#iwow-course-2").show();   
        });
        $("#iwow-ptsd-symptoms").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-3 .course-video").load("inc/iframe/iwow-ptsd-symptoms-video.php");                
                $("#iwow-course-3").show();     
        });
        $("#iwow-ptsd-coping").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-4 .course-video").load("inc/iframe/iwow-ptsd-coping-video.php");                
                $("#iwow-course-4").show(); 
        });            
        $("#iwow-tbi").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-5 .course-video").load("inc/iframe/iwow-tbi-video.php");                
                $("#iwow-course-5").show();     
        });    
        $("#iwow-tbi-coping").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-6 .course-video").load("inc/iframe/iwow-tbi-coping-video.php");                
                $("#iwow-course-6").show();      
        });
        $("#iwow-depression").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-7 .course-video").load("inc/iframe/iwow-depression-video.php");                
                $("#iwow-course-7").show();    
        });        
        $("#iwow-sud").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                 
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#iwow-course-8 .course-video").load("inc/iframe/iwow-sud-video.php");                
                $("#iwow-course-8").show();     
        });                                       
        $("#mantram-one").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#mantram-1 .course-video").load("inc/iframe/mantram-session-one-video.php");                
                $("#mantram-1").show(); 
        });
        $("#mantram-two").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#mantram-2 .course-video").load("inc/iframe/mantram-session-two-video.php");                
                $("#mantram-2").show();  
        });
        $("#mantram-three").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#mantram-3 .course-video").load("inc/iframe/mantram-session-three-video.php");                
                $("#mantram-3").show();    
        });
        $("#mantram-four").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#mantram-4 .course-video").load("inc/iframe/mantram-session-four-video.php");
                $("#mantram-4").show();    
        });
        $("#forgotten-me").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#focusing .course-video").load("inc/iframe/focusing-on-the-forgotten-me-video.php");
                $("#focusing").show();   
        });
        $("#goodbye").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#goodbye-to-going-it-alone .course-video").load("inc/iframe/goodbye-to-going-it-alone-video.php");
                $("#goodbye-to-going-it-alone").show(); 
        });
        $("#choosing-your-words").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#choosing-words .course-video").load("inc/iframe/choosing-your-words-video.php");
                $("#choosing-words").show();    
        }); 
        $("#creating-a-space").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#creating-space .course-video").load("inc/iframe/creating-a-space-video.php");
                $("#creating-space").show();     
        });
        $("#good-grief").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#goodgrief .course-video").load("inc/iframe/good-grief-video.php");
                $("#goodgrief").show(); 
        });
        $("#leaning-in").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#leaning .course-video").load("inc/iframe/leaning-in-video.php");
                $("#leaning").show(); 
        });
        $("#checkedout-vet").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#checked-out .course-video").load("inc/iframe/checkedout-vet-video.php").show();
                 
        }); 
        $("#center-of-gravity").click(function(){
                $("#carousel a").removeClass("selected-course", "glyphicon", "glyphicon-triangle-bottom");
                $("#abc-1").removeClass("selected-course","glyphicon", "glyphicon-triangle-bottom");                   
                $(this).addClass("selected-course","glyphicon", "glyphicon-triangle-bottom");
                $(".course").hide();
                $("#carousel.course-video").unload();
                $("#stillness-maintaining .course-video").load("inc/iframe/center-of-gravity-video.php");
                $("#stillness-maintaining").show(); 
        });       
        $("#close").click(function(){
                $(".video-description").hide();
        });
                             
});