import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Popup from '../popup/popup';
import Select from 'react-select';
import './home.css';

const options = [
  { value: 7, label: 'None' },	
  { value: 0, label: 'Sunday' },
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 3, label: 'Wednesday' },
  { value: 4, label: 'Thursday' },
  { value: 5, label: 'Friday' },
  { value: 6, label: 'Saturday' },
];

function addDays(dateObj, numDays) {
   dateObj.setDate(dateObj.getDate() + numDays);
   return dateObj;
}

class Home extends Component {  

	constructor(props) {
      super(props);
      this.state = {
      	listData:'',
      	startDate:new Date(),
      	endDate: addDays(new Date(), 7),
      	visibleStart: false,
      	visibleEnd: false,
      	buttonStart:'',
      	buttonEnd:'',
      	quickViewData:'',
      	open:false,
      	selectedOption: null,
      };
	}

	onChangeStart = startDate => this.setState({ startDate, visibleStart:false, visibleEnd:false })
	onChangeEnd = endDate => this.setState({ endDate, visibleStart:false, visibleEnd:false })

	toggleVisibilityStart() {
		this.setState({
	      visibleStart: !this.state.visibleStart,
	      visibleEnd:false
	    });
  }

  toggleVisibilityEnd() {
    this.setState({
      visibleEnd: !this.state.visibleEnd,
    	visibleStart:false
    });
	
  }

  componentDidMount(){
     this.getList();
  }

  componentDidUpdate(){
  	console.log(this.state.startDate);
  	console.log(this.state.endDate);
  		
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

	quickView(index){
	    console.log('getPlanet');
	    console.log(this.state.listData[index].id);
	    let id = this.state.listData[index].id;
		const that = this;    
	    
	    const url = `https://skilldeer.com/course/quick-view?id=${id}`;	
		
		fetch(url, {
			    method: 'get',
			  }).then(function(response) {
			        console.log(response.body);
			        if(response.ok)
			        {
			          console.log(response);
			          response.json().then(function(data) {
	           		  console.log(data);        
		           	  that.setState({
		                	quickViewData:data,
		                	open:true,
		              })
	         		});
	                }
			        else
			        {
			          console.log('invalid');
			        }
			    }).catch(function(err) {
			      console.log(err);
		});    
		           
    }

	handleSelect = selectedOption => {
	    this.setState({ selectedOption });
	    console.log(`Option selected:`, selectedOption);
  	};

	handler  = e => {
	  //  console.log(e.target.getAttribute("id"));
	    let id = e.target.getAttribute("id");
	    console.log(id);
	    //this.setState({planetData:''});
	 	this.quickView(id);
	 };

	getList = () =>{
		console.log('getList called()');

		console.log(this.formatDate(this.state.startDate));

		const that = this;    
    	
    	let start_date = this.formatDate(this.state.startDate);
    	let end_date = this.formatDate(this.state.endDate);
    	console.log(start_date);
    	console.log(end_date);
    	const url = `https://skilldeer.com/calendar/list?start=${start_date}&end=${end_date}`;
  		
		fetch(url, {
		      method: 'get',
		      }).then(function(response) {
		        console.log(response.body);
		        if(response.ok)
		        {
		          console.log(response);
		          response.json().then(function(data) {
           		  console.log(data);    
           		  
           		  var filtered;

           		  if(that.state.selectedOption!=null)
           		  {
           		       if(that.state.selectedOption['value']==7)
           		       {
           		       	  filtered=data;
           		       }else{
				       filtered=data.filter(function(item){
				  	   var date = new Date(item.start);
           		       console.log(date.getDay());
           		       var day = date.getDay();
           		       console.log(that.state.selectedOption['value']);
           		       if(day==that.state.selectedOption['value'])
				       {
				       	 return item;
				       }         
					});
				   }
           		}else{
           			filtered=data;
           		}

           		console.log(filtered);
           		  	
           		  var filterData = filtered.filter((arr, index, self) =>
   				  index === self.findIndex((t) => (t.id === arr.id)))
				  console.log(filterData);
	           	  
	           	  that.setState({
	                	listData:filterData,
	              })
         		
         		});
                }
		        else
		        {
		          console.log('invalid');
		        }
		    }).catch(function(err) {
		      console.log(err);
		    });
	}

	togglePopup() {
    this.setState({
      open: !this.state.open
    });
  }

	
    render() {
	     return (
	      <div>
	      <div className="row">
		  	<div className="col-sm-12 col-md-2 col-lg-2 sidebarHome">
		  		<div className="searchFilter">
		  			<h2 className="sidebarTitle">FILTERS</h2>
		  		</div>
		  		<h2 className="sidebarHeader">FILTER BY DATE</h2>
		  		<div className="date">
		   			<button onClick={this.toggleVisibilityStart.bind(this)} className="startDate">{this.formatDate(this.state.startDate)}</button>
		   			<button onClick={this.toggleVisibilityEnd.bind(this)} className="endDate">{this.formatDate(this.state.endDate)}</button>
       	 		</div>
       			<div style={{display: this.state.visibleStart ? 'block': 'none'}}>
		   		<Calendar
          			onChange={this.onChangeStart}
          			value={this.state.startDate}
        		/>
        	</div>
        	<div style={{display: this.state.visibleEnd ? 'block': 'none'}}>
		   		<Calendar
          			onChange={this.onChangeEnd}
          			value={this.state.endDate}
          			minDate={this.state.startDate}
        		/>
        	</div>
			<h2 className="sidebarHeader">FILTER BY DAY</h2>
		  		<Select
        			value={this.state.selectedOption}
        			onChange={this.handleSelect}
        			options={options}
      			/>
		  	<button type="button" className="searchBtn" onClick={this.getList}>Search</button>
		 </div>
		  
		<div className="col-sm-12 col-md-9 col-lg-9 mainSection">
		  	<h2 className="mainHeader">Available Classes</h2>
		  	<div className="row mainContent">
				{this.state.listData && this.state.listData.map(function(result, i) {
                  return  <div id={i} key={i} className="box" style={{backgroundImage: `url(${result.photo})`}}><ul className="box-ul"><li><h2 className="listHeader">{result.title}</h2></li><li><div className="overlay"><button id={i} type="button" className="searchBtn" onClick={this.handler}>Quick View</button></div></li></ul></div>
                }.bind(this))}
		 	</div>
		 	{this.state.open ? 
	          <Popup
	            text='Close Me'
	            closePopup={this.togglePopup.bind(this)}
	            popUpData = {this.state.quickViewData}
	          />
	          : null
        	}
		 </div>
		</div>
		</div>
	    );
  	}
}

export default Home;