import React from 'react';
import Style from 'style-it';
import './styles/tempoBar.css';

/* Generates bars based on avg track tempo */
const TempoBars = props => {
	const tempo = props.tempo;
	const tabColor = props.tabColor;
	/* Converts bpm to a useable bar height */
	const formatTempoBars = parseInt(tempo / 2, 10);
	/* Converts avg BPM to ms */
	const formatTempoAnim = parseInt(60 / tempo * 1000, 10);
	/* Italian tempo name */
	const tempoName = props.tempoName;

	return (
		<Style>
			{`
        #tempo-bars {
					height: 120px;
			    width: 180px;
			    display: flex;
			    transform: rotate(0.5turn);
					margin-right: 20px;
        }

				#tempo-bars:after {
				  position: absolute;
				  left: 0;
				  bottom: ${formatTempoBars + 10}px;
				  height: 1px;
				  background: #c00;
				  content: "";
				  width: 100%;
				  display: block;
				}

				#tempo-name:after {
					font-family: Lato, sans-serif;
					position: absolute;
					left: 0px;
					bottom: ${formatTempoBars - 10}px;
			    transform: rotate(0.5turn);
					color: white;
					content: "${tempoName}";
					width: 100%;
					display: block;
				}

        .tempo-bar {
					background: ${tabColor};
			    width: 20px;
			    animation: tempo-sound 0ms -800ms cubic-bezier(0.755, 0.050, 0.855, 0.060) infinite alternate;
        }

        @keyframes tempo-sound {
          0% {
            opacity: .35;
          }
          100% {
            opacity: 1;
            height: ${formatTempoBars}px;
          }
        }

				.tempo-bar:nth-child(1)  { left: 1px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(2)  { left: 20px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(3)  { left: 40px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(4)  { left: 60px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(5)  { left: 80px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(6)  { left: 100px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(7)  { left: 120px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(8)  { left: 140px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(9)  { left: 160px; animation-duration: ${formatTempoAnim}ms; }
				.tempo-bar:nth-child(10) { left: 180px; animation-duration: ${formatTempoAnim}ms; }
        `}

			<div id="tempo-bars">
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<div className="tempo-bar" />
				<h6 id="tempo-name"> </h6>
				{/*<div className="tempo-bar" />*/}
			</div>
		</Style>
	);
};

export default TempoBars;
