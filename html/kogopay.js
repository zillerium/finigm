function getWalletDetails() {
    walletId  = document.getElementById("walletId").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",  "https://kogopay.net:3000/api/getWalletDetails", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify({ "walletId": walletId  }));
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        if (data.response === "ok") {
	      document.getElementById("detailsWalletId").innerHTML=data.doc.wallet;
	      document.getElementById("detailsWalletBalance").innerHTML=data.doc.balance;
	      document.getElementById("message").innerHTML="Wallet Details are Displayed";
	} else {
              document.getElementById("message").innerHTML="There was an error";
	}
      }
    };
}

function getWalletList() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",  "https://kogopay.net:3000/api/getWalletList", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify({})); 
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        if (data.response === "ok") {
              document.getElementById("message").innerHTML="Wallet Details are Displayed";
	      
        } else {
              document.getElementById("message").innerHTML="There was an error";
        }
      }
    };
}


function readgps() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",  "http://3.80.157.235:3000/api/readPos", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify({ "all": 1 }));
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
	var travel = [];
	for (let i=0;i<data.doc.length;i++) 
	      {
            let longitude1 = data.doc[i]["Longitude"].toString();
            let latitude1 = data.doc[i]["Latitude"].toString();
            let square = data.doc[i]["GPSSquare"];
            let userid = data.doc[i]["UserID"];
            let gpsdate = data.doc[i]["GPSDate"];
            let dateformat = gpsdate.split('T');
	    let yearformat = dateformat[0].split('-');
	    let year= yearformat[0];
	    let month= yearformat[1];
	    let day= yearformat[2];
	    let hourformat = dateformat[1].split('Z');
            let timeformat = hourformat[0].split(':');
            let hh = timeformat[0];
	    let mm = timeformat[1];
            let sss = timeformat[2];
            let ss = sss.substring(0,1);
            let secs =Number(month)*31*24*60*60+Number(day)*24*3600+ Number(hh)*3600 + Number(mm)*60 + Number(ss);  
            travel.push({
                 "sec":secs,"userid": userid, "longitude":longitude1, "latitude":latitude1, "square": square
	    });
        }
	      travel.sort(function(a,b) {
		      return parseFloat(a.sec) - parseFloat(b.price);
	      });
            let g=1;
	      for (var n=0;n<travel.length;n++) {

  		      var timenow = parseInt(Date.now()/1000);
		      var newtimenow = parseInt(Date.now()/1000);
	     	 let wait = true;
	     	 //do {
               //	 	 newtimenow = parseInt(Date.now()/1000);
	//		 if ((newtimenow - timenow) > 1) wait = false;
	//		 document.getElementById("message").innerHTML = (newtimenow-timenow).toString(); 
	  //    	 }
	    // 	 while (wait)
           //        setTimeout(stateChange, 2000);
		     displayData(travel[n]);
              //    setTimeout(displayData(travel[n], 2000000));
              }
      }
    };
}







