class ButtTime extends React.Component {
	constructor(props){
		super(props);
		this.buttDigits = this.buttDigits.bind(this);
		this.canvas = this.canvas.bind(this);
		this.yo=this.yo.bind(this);
		this.sup=this.sup.bind(this);
		this.drawCounter = this.drawCounter.bind(this);
	}

	componentDidMount(){
	}

	buttDigits(butts){
		var buttElements = [];
		var buttString = butts + "";
		buttArray = buttString.split("");
		for (var i=0; i < buttArray.length; i++) {
			buttElements.push(<button className="buttButton">{buttArray[i]}</button>);
		}
		return buttElements;
	}
	// componentDidMount(){
	// 	debugger
	// }
	yo (){
		this.sup();
	}
	sup(){
		console.log('yo my name is shawn and');
	}

	drawCounter(c, x, y, width, height) {
		100, 100, 400, 400

		// border for outer rectangle
		c.beginPath();
		c.lineWidth = 15;
		c.moveTo(x,y);
		c.lineTo(x+width, y);
		c.lineTo(x+width, y + height);
		c.lineTo(x, y+height);
		c.lineTo(x,y)
		c.stroke()


		//outer rectangle
		c.fillStyle="grey";
		c.fillRect(x, y, width, height);

		

		//inner rectangle
	
		var innerRectangle = {
			x: x,
			y: y + (width/4),
			width: width,
			height: y + (width/4)
		}
		c.fillStyle="red";
		c.fillRect(innerRectangle.x, innerRectangle.y, innerRectangle.width, innerRectangle.height);

		//border for inner rectangle

		c.beginPath();
		c.lineWidth = 15;
		c.moveTo(innerRectangle.x, innerRectangle.y);
		c.lineTo(innerRectangle.x + width, innerRectangle.y);
		c.lineTo(innerRectangle.x + width, innerRectangle.y + innerRectangle.height);
		c.lineTo(innerRectangle.x, innerRectangle.y + innerRectangle.height);
		c.lineTo(innerRectangle.x,innerRectangle.y);
		c.stroke();


		//inside rectangle
		var insideRectangle={
			x: x +(x/4),
			y: innerRectangle.y + (innerRectangle.y/4),
			width: width - (width / 8),
			height: innerRectangle.height / 2
		}

		c.fillStyle="white";
		c.fillRect(insideRectangle.x, insideRectangle.y, insideRectangle.width, insideRectangle.height);

		//border for inside rectangle
		c.beginPath();
		c.lineWidth = 15;
		c.moveTo(insideRectangle.x, insideRectangle.y);
		c.lineTo(insideRectangle.x + insideRectangle.width, insideRectangle.y);
		c.lineTo(insideRectangle.x + insideRectangle.width, insideRectangle.y + insideRectangle.height);
		c.lineTo(insideRectangle.x, insideRectangle.y + insideRectangle.height);
		c.lineTo(insideRectangle.x, insideRectangle.y);
		c.stroke();

		// //corner lines
		c.beginPath();
		c.lineWidth = 15;
		c.moveTo(x,innerRectangle.y);
		c.lineTo(insideRectangle.x,insideRectangle.y);
		c.stroke();

		c.beginPath();
		c.moveTo(x + width,innerRectangle.y);
		c.lineTo(insideRectangle.x + insideRectangle.width,insideRectangle.y);
		c.stroke();
		
		c.beginPath();
		c.moveTo(x,innerRectangle.y + innerRectangle.height);
		c.lineTo(insideRectangle.x,insideRectangle.y + insideRectangle.height);
		c.stroke();

		c.beginPath();
		c.moveTo(x + width, innerRectangle.y + innerRectangle.height);
		c.lineTo(insideRectangle.x + insideRectangle.width, insideRectangle.y + insideRectangle.height);
		c.stroke();

		//lines in between numbers in counter
		c.lineWidth = 5;
		[1,2,3,4].forEach(function(i) {
			var lineX = insideRectangle.x + (insideRectangle.width * (i/5) )
			c.beginPath();
			c.moveTo(lineX,insideRectangle.y)
			c.lineTo(lineX,insideRectangle.y + insideRectangle.height)
			c.stroke()
		});

		//text
		c.font = "48px serif"
		c.textBaseline="hanging"
		c.fillStyle = "black"
		c.fillText('1', insideRectangle.x + 25, insideRectangle.y + 30)
	}

	canvas(){


		var canvas = document.querySelector('canvas');
		canvas.width = 600;
		canvas.height = 600;
		var c = canvas.getContext('2d');
		var width = 400;
		var height = 400;
		this.drawCounter(c, 100, 100, width, height);

			// $(window).resize(function(){
			// 	var canvas = document.querySelector('canvas')
			// 	canvas.width = innerWidth
			// 	canvas.height = 600
			// 	var c = canvas.getContext('2d');
			// })
	}

	render(){
		return(
		<div className="buttTime-container">
			<div className= "row">
				<div className="col-sm-4">
				</div>
				<div className={'col-sm-4 ' + this.props.buttTime + "-container"}>
					{this.canvas()}
					{this.props.buttTime === 'total' || this.props.buttTime==='today' ? (
							<p> Butts  {this.props.buttTime}: </p>
						): (
							<p> Butts this {this.props.buttTime}: </p>
						)}
					<div className="butt-digits odometer">
						{this.yo()}
						{this.buttDigits(this.props.butts.length)}
						}
					</div>
					<br></br>
					<input type="button" name="decrease" value="-" onClick={this.props.minus}/>
					<input type="button" name="increase" value="+" onClick={this.props.add}/>
				</div>
				<div className = "col-sm-4">
				</div>
			</div>
		</div>
		)
	}
}