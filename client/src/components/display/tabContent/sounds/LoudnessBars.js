import React from 'react';
import Style from 'style-it';

/* Generates bars with height based on avg track loudness(in dbs) */
const LoudnessBars = props => {
	const loudness = props.loudness;
	const tabColor = props.tabColor;
	/* Formats avg decibels to a useable bar height */
	const formatLoudness = parseInt(Math.abs(loudness) / 6 * 10, 10) + 1;

	return (
		<div>
			<Style>
				{`
        #loud-bars {
					height: 120px;
			    width: 180px;
			    display: flex;
			    transform: rotate(0.5turn);
					-webkit-transform: rotate(0.5turn);
					-ms-transform: rotate(0.5turn);
					margin-right: 20px;
        }

				#loud-bars:after {
					position: absolute;
					left: 0;
					top: ${formatLoudness}px;
					height: 1px;
					background: #c00;
					content: "";
					width: 100%;
					display: block;
				}

        .loud-bar {
					background: ${tabColor};
			    height: 1px;
			    width: 20px;
			    animation: loud-sound 0ms -800ms linear infinite alternate;
        }

        @keyframes loud-sound {
          0% {
            opacity: .35;
            height: 1px;
          }
          100% {
            opacity: 1;
            height: ${formatLoudness}px;
          }
        }

				@-webkit-keyframes loud-sound {
					0% {
						opacity: .35;
						height: 1px;
					}
					100% {
						opacity: 1;
						height: ${formatLoudness}px;
					}
				}

				.loud-bar:nth-child(1)  { left: 1px;  animation-duration: 474ms; -webkit-animation-duration: 474ms; }
				.loud-bar:nth-child(2)  { left: 20px; animation-duration: 433ms; -webkit-animation-duration: 433ms; }
				.loud-bar:nth-child(3)  { left: 40px; animation-duration: 407ms; -webkit-animation-duration: 407ms; }
				.loud-bar:nth-child(4)  { left: 60px; animation-duration: 458ms; -webkit-animation-duration: 458ms; }
				.loud-bar:nth-child(5)  { left: 80px; animation-duration: 400ms; -webkit-animation-duration: 400ms; }
				.loud-bar:nth-child(6)  { left: 100px; animation-duration: 427ms; -webkit-animation-duration: 427ms; }
				.loud-bar:nth-child(7)  { left: 120px; animation-duration: 441ms; -webkit-animation-duration: 441ms; }
				.loud-bar:nth-child(8)  { left: 140px; animation-duration: 419ms; -webkit-animation-duration: 419ms; }
				.loud-bar:nth-child(9)  { left: 160px; animation-duration: 487ms; -webkit-animation-duration: 487ms; }
				.loud-bar:nth-child(10) { left: 180px;  animation-duration: 442ms; -webkit-animation-duration: 442ms; }
        `}

				<div id="loud-bars">
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					<div className="loud-bar" />
					{/*<div className="loud-bar" />*/}
				</div>
			</Style>
		</div>
	);
};

export default LoudnessBars;
