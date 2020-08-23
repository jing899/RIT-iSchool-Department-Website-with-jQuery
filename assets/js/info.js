
//api:      http://www.ist.rit.edu/api/
$(document).ready(function(){

    // get the /about/ information onto the page
    myXHR('get',{'path':'/about/'}).done(function(json){
        var x = '<div id="about_title" <h2>'+json.title+'</h2></div>';
        x+='<p>'+json.description+'</p>';
        x+='<p>'+json.quote+'</p>';
        x+='<p>'+json.quoteAuthor+'</p>';

        // add this 'x' to the page
        $('#about').html(x);
    }); // end /about/

    // --------------------------------------------

    //    // degrees undergraudate
    myXHR('get',{'path':'/degrees/undergraduate/'}).done(function(json){
        $.each(json.undergraduate,function(i,item){
            var x='';
            var icons = ['fa fa-globe','fa fa-database', 'fa fa-laptop'];
            x+='<a data-featherlight="#'+item.degreeName+'">'+'<div class="majors">'+'<i class="'+icons[i]+'"style="font-size:3vw;"></i><h2>'+item.title+'</h2>';
            x+='<p>'+item.description+'</p>'+'</div>'+'</a>';

            var y='<div class="hiddenContent" id="'+item.degreeName+'">'+'<h2>Concentrations: </h2>'+'<ul>';
            $.each(item.concentrations,function(j,jtem){
                y+='<li>'+jtem+'</li>';
            });

            y+='</ul></div>';
            x+=y;

            $('#undergraduate').append(x);
        });
    });

    //    }); // end degrees/undergraduate/

    // --------------------------------------------

    // degrees graudate
    myXHR('get',{'path':'/degrees/graduate/'}).done(function(json){
        $.each(json.graduate,function(i,item){
            var x='';
            var icons = ['fa fa-cog','fa fa-file', 'fa fa-server'];
            if(item.degreeName!="graduate advanced certificates"){
                x += '<a data-featherlight="#'+item.degreeName+'">'+'<div class="majors">'+'<i class="'+icons[i]+'"style="font-size:3vw;"></i><h2>'+item.title+'</h2>';
                x+='<p>'+item.description+'</p>'+'</div>'+'</a>';

                var y='<div class="hiddenContent" id="'+item.degreeName+'">'+'<h2>Concentrations: </h2>'+'<ul>';
                $.each(item.concentrations,function(j,jtem){
                    y+='<li>'+jtem+'</li>';
                });
                y+='</ul></div>';
            }else{
                x+='<div><button id="certButton" data-featherlight="#cert">'+'<  Graduate Advanced Certificates  ></button></div>';
                var y='<div class="hiddenContent" id="cert">'+'<h2>Certificates: </h2>'+'<ul>';
                $.each(item.availableCertificates,function(k,ktem){
                    y+='<li>'+ktem+'</li>';
                });
                y+='</ul></div>';
            }

            x+=y;		// add the concentrations to the program information				

            $('#graduates').append(x);
        });
    }); // end degrees/graduate/

    // --------------------------------------------

    // minors
    myXHR('get',{'path':'/minors/'}).done(function(json){
        $.each(json.UgMinors,function(i,item){
            var x='';
            var icons = ['fa fa-database','fa fa-map-marker', 'fa fa-heart', 'fa fa-object-group', 'fa fa-mobile', 'fa fa-link', 'fa fa-html5', 'fa fa-window-maximize'];
            x += '<a data-featherlight="#'+item.name+'">'+'<div id="minors">'+'<i class="'+icons[i]+'"style="font-size:3vw;"></i><h2>'+item.title+'</h2>'+'</div>'+'</a>';

            var y='<div class="hiddenContent" id="'+item.name+'">'+'<h2>'+item.title+'</h2>'+'<p>'+item.description+'</p>'+'<ul>';
            $.each(item.courses,function(j,jtem){
                y+='<li>'+jtem+'</li>';
            });
            y+='</ul></div>';

            x+=y;		// add the concentrations to the program information				

            $('#minor').append(x);
        });
    }); // end minors


    // --------------------------------------------

    // people faculty
    myXHR('get',{'path':'/people/faculty'}).done(function(json){
        var x='';
        $.each(json.faculty,function(i,item){
            x+='<a data-featherlight="#'+item.username+'">';
            x+='<div id="facPeople"><h2>'+item.name+'</h2>';
            x += '<img class="pics" src="' +item.imagePath + '"/>';
            x+='<p>'+item.title+'</p></div></a>';

            x+='<div class="hiddenContent" id="'+item.username+'">'+'<h2 class="peoplelName">'+item.name+'</h2>';
            x+='<img class="pics" src="'+item.imagePath+'"/>'+'<br><div class="peopleInfo"><p>'+item.title+'<p/>';
            if(item.interestArea!=null&&item.interestArea!="")
                x+='<p>Interest Area: '+item.interestArea+'</p>';
            if(item.office!=null&&item.office!="")
                x+='<p>Office: '+item.office+'</p>';
            if(item.phone!=null&&item.phone!="")
                x+='<p>Phone: '+item.phone+'</p>';
            if(item.email!=null&&item.email!="")
                x+='<p>Email: '+item.email+'</p>';
            if(item.twitter!=null&&item.twitter!="")
                x+='<a href="'+item.twitter+'">'+'<p><span>Twitter: </span>'+item.twitter+'</p></a>';
            if(item.facebook!=null&&item.facebook!="")
                x+='<a href="'+item.facebook+'">'+'<p><span>Facebook: </span>'+item.facebook+'</p></a>';
            if(item.website!=null&&item.website!="")
                x+='<a href="'+item.website+'">'+'<p><span>Website: </span>'+item.website+'</p></a>';

            x+='</div></div>';
        });
        $('#faculty').append(x);
    }); // end people/faculty

    //    // --------------------------------------------

    // people staff
    myXHR('get',{'path':'/people/staff'}).done(function(json){
        var x='';
        $.each(json.staff,function(i,item){
            x+='<a data-featherlight="#'+item.username+'">';
            x+='<div id="stafPeople"><h2>'+item.name+'</h2>';
            x += '<img class="pics" src="' +item.imagePath + '"/>';
            x+='<p>'+item.title+'</p></div></a>';

            x+='<div class="hiddenContent" id="'+item.username+'">'+'<h2 class="peoplelName">'+item.name+'</h2>';
            x+='<img class="pics" src="'+item.imagePath+'"/>'+'<br><div class="peopleInfo"><p>'+item.title+'</p>';
            if(item.interestArea!=null&&item.interestArea!="")
                x+='<p>Interest Area: '+item.interestArea+'</p>';
            if(item.office!=null&&item.office!="")
                x+='<p>Office: '+item.office+'</p>';
            if(item.phone!=null&&item.phone!="")
                x+='<p>Phone: '+item.phone+'</p>';
            if(item.email!=null&&item.email!="")
                x+='<p>Email: '+item.email+'</p>';
            if(item.twitter!=null&&item.twitter!="")
                x+='<a href="'+item.twitter+'">'+'<p><span>Twitter: </span>'+item.twitter+'</p></a>';
            if(item.facebook!=null&&item.facebook!="")
                x+='<a href="'+item.facebook+'">'+'<p><span>Facebook: </span>'+item.facebook+'</p></a>';
            if(item.website!=null&&item.website!="")
                x+='<a href="'+item.website+'">'+'<p><span>Website: </span>'+item.website+'</p></a>';

            x+='</div></div>';
        });
        $('#staff').append(x);
    }); // end people/staff

    // --------------------------------------------

    // news  
    myXHR('get',{'path':'/news'}).done(function(json){
        var x='';

        $.each(json.older,function(i,item){

            x += '<h3>' + item.title + '</h3>';
            x += '<div>';
            x += '<p>' + item.date + '</p>';
            x += '<p>' + item.description + '</p>';
            x += '</div>';
        });
        $('#news').append(x);
        $('#news').accordion();
    }); // end news



    // --------------------------------------------

    // research/byInterestArea
    myXHR('get',{'path':'/research/byInterestArea'}).done(function(json){
        $.each(json.byInterestArea,function(i,item){
            var x='';

            x+='<a data-featherlight="#'+item.areaName+'">'+'<div id="byInt"><h4>'+item.areaName+'</h4>'+'</div>'+'</a>';

            var y='<div class="hiddenContent" id="'+item.areaName+'">'+'<h2>'+item.areaName+'</h2>'+'<ul>';
            $.each(item.citations,function(j,jtem){
                y+='<li>'+jtem+'</li>';
            });
            y+='</ul></div>';

            x+=y;
            $('#reByInt').append(x);
        });
    }); // end research/byInterestArea

    // --------------------------------------------

    // research/byFaculty
    myXHR('get',{'path':'/research/byFaculty'}).done(function(json){
        $.each(json.byFaculty,function(i,item){
            var x='';
            x+='<a data-featherlight="#'+item.username+'">'+'<div id="byFac"><h4>'+item.facultyName+'</h4>'+'</div>'+'</a>';

            var y='<div class="hiddenContent" id="'+item.username+'">'+'<h2>'+item.facultyName+'</h2>'+'<ul>';            
            $.each(item.citations,function(j,jtem){
                y+='<li>'+jtem+'</li>';
            });
            y+='</ul></div>';

            x+=y;		// add the concentrations to the program information				

            $('#reByFac').append(x);
        });
    }); // end research/byFaculty

    // --------------------------------------------

    //    footer
    myXHR('get',{'path':'/footer'}).done(function(json){
        var x='';
        x+='<h1>'+json.social.title+'</h1>';
        x+='<p>"'+json.social.tweet+'"</p>';
        x+='<p>'+json.social.by+'</p>';
        x+='<a class="socialIcons" href="'+json.social.twitter+'"><i class="fa fa-twitter"></i></a>';
        x+='<a class="socialIcons" href="https://www.facebook.com/iSchoolatRIT/"><i class="fa fa-facebook-square"></i></a>';
        var y='<div class="quickLinks">';
        $.each(json.quickLinks,function(i,item){
            y+='<span>---<span>'
            y+='<a href="'+item.href+'"><p>| '+item.title+' |</p></a>';
        });
        y+='<span>---</span></div>';
        x+=y;
        x+='<div class="copyRight">'+json.copyright.html+'</div>';
        $('.footer').append(x);
    });

    // --------------------------------------------

    //resources 

    myXHR('get',{'path':'/resources/'}).done(function(json){
        var x='';
        x+='<h1 class="title">'+json.title+'</h1>';
        x+='<h4 id="resSubTitle">'+json.subTitle+'</h4>';
        x += '<div id="resContent">';
        x+='<div class="resMain>"';
        x+='<a data-featherlight="#studyAbroad">'+'<p>'+json.studyAbroad.title+'</p></div></a>';
        x+='<div class="resMain>"';
        x+='<a data-featherlight="#'+json.studentServices.title+'">'+'<p>'+json.studentServices.title+'</p></div></a>';
        x+='<div class="resMain>"';
        x+='<a data-featherlight="#tutorsAndLabInformation">'+'<p>'+json.tutorsAndLabInformation.title+'</p></div></a>';
        x+='<div class="resMain>"';
        x+='<a data-featherlight="#studentAmbassadors">'+'<p>'+json.studentAmbassadors.title+'</p></div></a>';
        x+='<div class="resMain>"';
        x+='<a data-featherlight="#'+json.coopEnrollment.title+'">'+'<p>'+json.coopEnrollment.title+'</p></div></a>';
        x+='<div class="resMain>"';
        x+='<a class = format data-featherlight="#formInfo">'+'<p>Forms</p></div></a>';
        x+='</div>';
        $('#resources').append(x);
    });

    myXHR('get',{'path':'/resources/studyAbroad'}).done(function(json){
        var x='';
        x+='<div class="hiddenContent" id="studyAbroad">';
        x+='<h2 class="resourceTitle">'+json.studyAbroad.title+'</h2>';
        x+='<p>'+json.studyAbroad.description+'<p>';
        var y='<div>';
        $.each(json.studyAbroad.places,function(i,item){
            y+='<h3>'+item.nameOfPlace+'</h3>';
            y+='<p>'+item.description+'</p>';
        });
        y+='</div>'
        x+=y;
        x+='</div>';
        $('#resources').append(x);
    });

    myXHR('get',{'path':'/resources/studentServices'}).done(function(json){
        var x='';
        x+='<div class="hiddenContent" id="'+json.studentServices.title+'">';
        x+='<h2 class="resourceTitle">'+json.studentServices.title+'</h2>';
        x+='<p>'+json.studentServices.academicAdvisors.description+'</p>';
        x+='<h3>'+json.studentServices.academicAdvisors.faq.title+'</h3>';
        x+='<p>For FAQs <a href="'+json.studentServices.academicAdvisors.faq.contentHref+'">ClickHere!</a></p>';
        x+='<div><h2>'+json.studentServices.professonalAdvisors.title+'</h2>';
        var y='';
        $.each(json.studentServices.professonalAdvisors.advisorInformation,function(i,item){
            y+='<p>'+item.name;y+='<br>'+item.department;y+='<br>'+item.email;y+='</p>';
        });
        x+=y+'</div>';
        x+='<h3>'+json.studentServices.facultyAdvisors.title+'</h3>';
        x+='<p>'+json.studentServices.facultyAdvisors.description+'</p>';
        x+='<h3>'+json.studentServices.istMinorAdvising.title+'</h3>';
        y='<ul>';
        $.each(json.studentServices.istMinorAdvising.minorAdvisorInformation,function(k,ktem){
            y+='<li>'+ktem.title+'<br> --'+ktem.advisor+'<br> --'+ktem.email+'</li>';
        });
        x+=y;
        x+='</div>';
        x+='</div>';$('#resources').append(x);
    });

    myXHR('get',{'path':'/resources/tutorsAndLabInformation'}).done(function(json){
        var x='';
        x+='<div class="hiddenContent" id="tutorsAndLabInformation">'+'<h2 class="resourceTitle">'+json.tutorsAndLabInformation.title+'</h2>'+'<p>'+json.tutorsAndLabInformation.description+'</p>';
        x+='</div>'
        $('#resources').append(x);
    });

    myXHR('get',{'path':'/resources/studentAmbassadors'}).done(function(json){
        var x='';
        x+='<div class="hiddenContent" id="studentAmbassadors">'+'<h2 class="resourceTitle">'+json.studentAmbassadors.title+'</h2>'+'<figure><img src="https://ist.rit.edu/assets/img/resources/Ambassadors.jpg" alt="ambassadorsImageSource">'+'</figure>';
        var y='';
        $.each(json.studentAmbassadors.subSectionContent,function(i,item){
            y+='<h3>'+item.title+'</h3>';
            y+='<p>'+item.description+'</p>';   
        });
        x+=y;
        x+='<p>Note: '+json.studentAmbassadors.note+'</p>';
        $('#resources').append(x);
    });

    myXHR('get',{'path':'/resources/coopEnrollment'}).done(function(json){
        var x='';
        x+='<div class="hiddenContent" id="'+json.coopEnrollment.title+'">'+'<h2 class="resourceTitle">'+json.coopEnrollment.title+'</h2>';
        var y='';
        $.each(json.coopEnrollment.enrollmentInformationContent,function(i,item){
            y+='<h3>'+item.title+'</h3>';
            y+='<p>'+item.description+'</p>';   

        });
        x+=y;
        x+='</div>';
        $('#resources').append(x);
    });

    myXHR('get',{'path':'/resources/forms'}).done(function(json){
        var x = '';
        x += '<div class="hiddenContent" id="formInfo">'+'<h2>Underdraduate Forms</h2>';
        var y='';
        $.each(json.forms.graduateForms, function(){ 
            y+="<a class='formTag' href='http://ist.rit.edu/"+this.href+"'><h2>"+this.formName+"</h2></a>";
        });
        $.each( json.forms.undergraduateForms, function(){ 
            y+="<h3 id = 'color'>Underdraduate Forms</h3><a class='formTag' href='http://ist.rit.edu/"+this.href+"'><h2>"+this.formName+"</h2></a>";
        });
        x+=y
        x+='</div>';
        $('#resources').append(x);
    });
    //end resources

    // --------------------------------------------

    //    employment

    myXHR('get',{'path':'/employment/introduction/'}).done(function(json){
        var x='';
        x+='<h1>Introduction</h1>';
        x+='<h2>'+json.introduction.title+'</h2>';
        var y='';
        $.each(json.introduction.content,function(k,ktem){
            y+='<div>';
            y+='<h1>'+ktem.title+'</h1>';
            y+='<p>'+ktem.description+'</p>';
            y+='</div>';
        });
        x+=y;
        $('#introduction').append(x);
    });

    myXHR('get',{'path':'/employment/degreeStatistics/'}).done(function(json){
        var x='';
        x+='<h2>'+json.degreeStatistics.title+'</h2>';
        x+='<hr/>';
        var y='';
        $.each(json.degreeStatistics.statistics,function(b,btem){
            y+='<div class="stats">';
            y+='<h2>'+btem.value+'</h2>';
            y+='<p>'+btem.description+'</p>';
            y+='</div>';
        });
        x+=y;
        $('#degreeStats').html(x);
    });

    myXHR('get',{'path':'/employment/employers'}).done(function(json){
        var x='';
        x+='<h2>'+json.employers.title+'</h2>';
        var y='';
        $.each(json.employers.employerNames,function(d,dtem){
            y+='<p>'+dtem+'</p>';
        });
        y+='</ul>';
        x+=y;
        $('#employers').html(x);
    });

    myXHR('get',{'path':'/employment/careers'}).done(function(json){
        var x='';
        x+='<h2>'+json.careers.title+'</h2>';
        var y='';
        $.each(json.careers.careerNames,function(f,ftem){
            y+='<p>'+ftem+'</p>';
        });
        y+='</ul>';
        x+=y;
        $('#careers').html(x);
    });

    myXHR('get',{'path':'/employment/'}).done(function(json){
        $('#coopButton').html(json.coopTable.title);
        $('#proButton').html(json.employmentTable.title)
        $('#coopButton').on('click',function(){
            var x='<table id="coopTable">'+'<thead>'+'<tr>'+'<th>Employer</th>'+'<th>Degree</th>'+'<th>City</th>'+'<th>Term</th>'+'</tr>'+'</thead>'+'<tbody id=\'coopTableBody\'>';
            $.each(json.coopTable.coopInformation,function(i,item){
                x+='<tr>'+'<td>'+item.employer+'</td>'+'<td>'+item.degree+'</td>'+'<td>'+item.city+'</td>'+'<td>'+item.term+'</td>'+'</tr>';
            });
            x+='</tbody>'+'</table>';
            $.featherlight(x);
            $('#coopTable').DataTable();
        });
        $('#proButton').on('click',function(){
            var x='<table id="proTable">'+'<thead>'+'<tr>'+'<th>Employer</th>'+'<th>Degree</th>'+'<th>City</th>'+'<th>Title</th>'+'<th>Start Date</th>'+'</tr>'+'</thead>'+'<tbody id="coopTableBody">';
            $.each(json.employmentTable.professionalEmploymentInformation,function(i,item){
                x+='<tr>'+'<td>'+item.employer+'</td>'+'<td>'+item.degree+'</td>'+'<td>'+item.city+'</td>'+'<td>'+item.title+'</td>'+'<td>'+item.startDate+'</td>'+'</tr>';
            });
            x+='</tbody>'+'</table>';
            $.featherlight(x);
            $('#proTable').DataTable();
        });
    });


});	// end document ready




// AJAX function to get information 
// XHR is XML HTTP Request
// t = get or post
// d = path : /about/
function myXHR(t,d){
    return $.ajax({
        type: t,
        cache: false,
        async: true,
        dataType:'json',
        url:'proxy.php',
        data:d,
        beforeSend:function(){
            // do this before sending the request
            $('<img src="gears.gif" id="spinner" '+
              'style="position:relative;top:50px;left:50px;z-index:2000"/>')
                .appendTo("body");
        }
    }).always(function(){
        // happens at the end, no matter what
        $('#spinner').remove();
    }).fail(function(){
        // if our request doesn't work
        console.log('Failure with '+d.path);
    });
} // end myXHR



