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
		//outer rectangle
		c.fillStyle="grey";
		c.fillRect(x, y, width, height);

		//inner rectangle
		c.fillStyle="red";
		var innerRectangleHeight = height / 2;
		var innerY = y + (width/4);
		c.fillRect(x, innerY, width, innerRectangleHeight);

		//inner inner rectangle
		c.fillStyle="white";
		var counterRectX = x + (x / 4);
		var counterRectY = innerY + (innerY / 4);
		var counterRectWidth = width - (width / 8);
		var counterRectHeight = innerRectangleHeight / 2;
		c.fillRect(counterRectX, counterRectY, counterRectWidth, counterRectHeight);


		//corner lines
		c.beginPath();
		c.moveTo(x,innerY);
		c.lineTo(counterRectX,counterRectY);
		c.stroke();

		c.beginPath();
		c.moveTo(x + width,innerY);
		c.lineTo(counterRectX + counterRectWidth,counterRectY);
		c.stroke();
		
		c.beginPath();
		c.moveTo(x,innerY + innerRectangleHeight);
		c.lineTo(counterRectX,counterRectY + counterRectHeight);
		c.stroke();

		c.beginPath();
		c.moveTo(x + width, innerY + innerRectangleHeight);
		c.lineTo(counterRectX + counterRectWidth,counterRectY + counterRectHeight);
		c.stroke();

		//lines in between numbers in counter
		[1,2,3,4,5].forEach(function(i) {
			console.log(i)
  		// c.beginPath();
		// c.moveTo(425 + (350/4), 350 )
		// c.lineTo(425 +(350/4), 450)
		// c.stroke()
		});
		// c.beginPath();
		// c.moveTo(425 + (350/4), 350 )
		// c.lineTo(425 +(350/4), 450)
		// c.stroke()

		// c.beginPath();
		// c.moveTo(425 + (350/2), 350)
		// c.lineTo(425 + (350/2), 450)
		// c.stroke()

		// c.beginPath();
		// c.moveTo(425 + (350 * .75), 350)
		// c.lineTo(425 + (350 * .75), 450)
		// c.stroke()
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