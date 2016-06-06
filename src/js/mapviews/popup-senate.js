// Import React and HelloText class
import React from 'react';

// Create class called WelcomeScreen that extends the base React Component class
class PopupSenate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        $('.house-seat[data-sitting="' + this.props.polId + '"]').attr("class", "house-seat activeSeat selected");
    }

    render(props) {
        return (
            <div className="mapsvg">
              <svg viewBox="0 0 634 936.5">
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n      /* Tables and other non-interactive elements */\n      .bit {\n          fill: rgba(255,255,255,0.2);\n      }\n      /* Seats */\n      .house-seat {\n          fill: rgba(255,255,255,0.4);\n      }\n      .house-seat.activeSeat {\n      }\n      .house-seat.activeSeat:hover {\n      }\n\n      .house-seat.selected {\n        fill: #0493D8;\n      }\n    " }} />

                {/* Decorative elements */}
                <path className="bit" d="M213.4,707.3L197.1,719c5.8,8,12.9,15,21,20.8l11.6-16.3C223.5,719,217.9,713.6,213.4,707.3z" />
                <path className="bit" d="M392.6,730.6c-8.6,3.8-18.1,5.9-28.1,5.9H363v20h1.5c13,0,25.3-2.8,36.4-7.7L392.6,730.6z" />
                <path className="bit" d="M270,736.5c-10,0-19.9-2.3-28.7-6.3l-8.4,18.2c11.4,5.2,24.1,8,37.1,8V736.5z" />
                <path className="bit" d="M420.9,707.5c-4.5,6.3-10.1,11.8-16.4,16.3l11.6,16.3c8.1-5.8,15.2-12.8,21-20.9L420.9,707.5z" />
                <path className="bit" d="M180,666.5c0,13.3,3,26,8.2,37.4l18.2-8.3c-4.1-8.9-6.4-18.7-6.4-29.1H180z" />
                <path className="bit" d="M427.7,695.7l18.2,8.3c5.2-11.4,8.1-24.1,8.1-37.5h-20C434,676.9,431.7,686.8,427.7,695.7z" />
                <rect x={180} y="142.5" className="bit" width={20} height={66} />
                <rect x={180} y="247.5" className="bit" width={20} height={65} />
                <rect x={180} y="351.5" className="bit" width={20} height={66} />
                <rect x={434} y="142.5" className="bit" width={20} height={66} />
                <rect x={434} y="247.5" className="bit" width={20} height={65} />
                <rect x={434} y="351.5" className="bit" width={20} height={66} />
                <rect x={434} y="456.5" className="bit" width={20} height={65} />
                <rect x={434} y="560.5" className="bit" width={20} height={66} />
                <rect x={180} y="456.5" className="bit" width={20} height={65} />
                <rect x={180} y="560.5" className="bit" width={20} height={66} />
                <rect x={251} y="142.5" className="bit" width={132} height={66} />
                <rect x={276} y="197.1" className="bit" width={82} height={174} />
                <rect x="279.3" y="521.5" className="bit" width={32} height={32} />
                <rect x="279.3" y="475.3" className="bit" width="75.5" height="35.3" />
                <rect x="322.8" y="521.5" className="bit" width={32} height={32} />
                <rect x={251} y="90.5" className="bit" width={32} height={32} />
                <rect x={351} y="90.5" className="bit" width={32} height={32} />
                <rect x={301} y="90.5" className="bit" width={32} height={32} />
                <rect x="279.3" y="45.3" className="bit" width="75.5" height="35.3" />
                <rect x={301} y="377.9" className="bit" width={32} height={32} />

                {/* Speaker */}
                <rect className="house-seat activeSeat" data-sitting={10507} x="299.4" width="35.3" height="35.3" /> {/* Stephen Parry */}

                {/* Leader of the Government */}
                <rect className="house-seat activeSeat" data-sitting={10067} x={234} y="247.5" width={32} height={32} /> {/* George Brandis */}

                {/* Government Whips */}
                <polygon className="house-seat" points="40,173 40,142.5 20,142.5 0,142.5 0,173 " />
                <rect className="house-seat" y={178} width={40} height="30.5" />
                <polygon className="house-seat activeSeat" data-sitting={10085} points="100,173 100,142.5 80,142.5 60,142.5 60,173 " /> {/* David Bushby */}
                <rect className="house-seat activeSeat" data-sitting={10215} x={60} y={178} width={40} height="30.5" /> {/*David Fawcett */}
                <polygon className="house-seat activeSeat" data-sitting={10224} points="160,173 160,142.5 140,142.5 120,142.5 120,173 " /> {/* Mitch Fifield */}
                <rect className="house-seat activeSeat" data-sitting={10148} x={120} y={178} width={40} height="30.5" /> {/* Mathias Cormann */}

                {/* Government Ministers One */}
                <rect className="house-seat activeSeat" data-sitting={10768} y="247.5" width={40} height="29.5" /> {/* Dean Smith */}
                <rect className="house-seat activeSeat" data-sitting={10840} y={282} width={40} height="30.5" /> {/* Jo Lindgren */}
                <rect className="house-seat activeSeat" data-sitting={10833} x={60} y="247.5" width={40} height="29.5" /> {/* James McGrath */}
                <rect className="house-seat activeSeat" data-sitting={10401} x={60} y={282} width={40} height="30.5" /> {/* Ian MacDonald */}
                <rect className="house-seat activeSeat" data-sitting={10509} x={120} y="247.5" width={40} height="29.5" /> {/* Marise Payne */}
                <rect className="house-seat activeSeat" data-sitting={10707} x={120} y={282} width={40} height="30.5" /> {/* Michaelia Cash */}

                {/* Government Ministers Two */}
                <rect className="house-seat activeSeat" data-sitting={10344} y="351.5" width={40} height="30.5" /> {/* David Johnston */}
                <rect className="house-seat activeSeat" data-sitting={10550} y={387} width={40} height="30.5" /> {/* Michael Ronaldson */}
                <rect className="house-seat activeSeat" data-sitting={10756} x={60} y="351.5" width={40} height="30.5" /> {/* Sean Edwards */}
                <rect className="house-seat activeSeat" data-sitting={10722} x={60} y={387} width={40} height="30.5" /> {/* Christopher Back */}
                <rect className="house-seat activeSeat" data-sitting={10044} x={120} y="351.5" width={40} height="30.5" /> {/* Simon Birmingham */}
                <rect className="house-seat activeSeat" data-sitting={10766} x={120} y={387} width={40} height="30.5" /> {/* Arthur Sinodinos */}

                {/* Government Ministers Three */}
                <rect className="house-seat activeSeat" data-sitting={10822} y="456.5" width={40} height="29.5" /> {/* Zed Seselja */}
                <rect className="house-seat activeSeat" data-sitting={10003} y={491} width={40} height="30.5" /> {/* Eric Abetz */}
                <rect className="house-seat activeSeat" data-sitting={10835} x={60} y="456.5" width={40} height="29.5" /> {/* Linda Reynolds */}
                <rect className="house-seat activeSeat" data-sitting={10038} x={60} y={491} width={40} height="30.5" /> {/* Cory Bernardi */}
                <rect className="house-seat activeSeat" data-sitting={10131} x={120} y="456.5" width={40} height="29.5" /> {/* Richard Colbeck */}
                <rect className="house-seat activeSeat" data-sitting={10222} x={120} y={491} width={40} height="30.5" /> {/* Concetta Fierravanti-Wells */}

                {/* Government Ministers Four */}
                <rect className="house-seat" y="560.5" width={40} height="30.5" />
                <rect className="house-seat" y={596} width={40} height="30.5" />
                <rect className="house-seat activeSeat" data-sitting={10296} x={60} y="560.5" width={40} height="30.5" /> {/* Bill Heffernan */}
                <rect className="house-seat" x={60} y={596} width={40} height="30.5" />
                <rect className="house-seat activeSeat" data-sitting={10715} x={120} y="560.5" width={40} height="30.5" /> {/* Scott Ryan */}
                <rect className="house-seat activeSeat" data-sitting={10781} x={120} y={596} width={40} height="30.5" /> {/* Anne Ruston */}

                {/* Government Ministers Five */}
                <path className="house-seat" d="M44.8,712.6c-3.1-15.1-4.8-30.5-4.8-46.1H0c0,18.5,1.9,36.7,5.7,54.6L44.8,712.6z" />
                <path className="house-seat" d="M45.8,717.5L6.7,726c3.6,15.6,8.5,30.8,14.8,45.7c0.9,2.2,1.9,4.4,2.9,6.6l36.4-16.5c-0.9-1.9-1.7-3.8-2.5-5.7
              C53.1,743.5,48.9,730.7,45.8,717.5z" />
                <path className="house-seat activeSeat" data-sitting={10827} d="M103.3,700c-2.2-10.8-3.3-22-3.3-33.5H60c0,14.4,1.5,28.4,4.2,41.9L103.3,700z" /> {/* Matthew Canavan */}
                <path className="house-seat activeSeat" data-sitting={10758} d="M65.3,713.3c3.2,14,7.8,27.4,13.7,40.2l36.4-16.5c-4.7-10.2-8.4-21-11-32.1L65.3,713.3z" /> {/* Bridget MacKenzie */}
                <path className="house-seat activeSeat" data-sitting={10569} d="M120,666.5c0,22.2,4.9,43.2,13.6,62.2l36.4-16.5c-6.4-13.9-10-29.4-10-45.7H120z" /> {/* Nigel Scullion */}

                {/* Government Ministers Six */}
                <path className="house-seat" d="M105.9,827.1c-8.2-8.4-15.7-17.3-22.5-26.8l-32.6,23.3c8.1,11.2,17,21.8,26.8,31.8L105.9,827.1z" />
                <path className="house-seat" d="M81.1,859c10.1,10,20.9,19,32.4,27.2l23.3-32.6c-9.6-6.9-18.8-14.6-27.3-23L81.1,859z" />
                <path className="house-seat activeSeat" data-sitting={10716} d="M148.2,784.7c-5.8-6-11.3-12.4-16.2-19.3l-32.5,23.3c6.2,8.6,13,16.7,20.4,24.3L148.2,784.7z" /> {/* John Williams */}
                <path className="house-seat activeSeat" data-sitting={10824} d="M123.5,816.5c7.7,7.5,16,14.5,24.9,20.8l23.3-32.5c-7-5-13.7-10.6-19.8-16.6L123.5,816.5z" /> {/* Barry O'Sullivan */}
                <path className="house-seat activeSeat" data-sitting={10478} d="M180.8,730.6l-32.5,23.3c9.7,13.4,21.5,25.1,34.9,34.7l23.3-32.5C196.6,749,187.9,740.4,180.8,730.6z" /> {/* Fiona Nash */}

                {/* Government Ministers Seven */}
                <path className="house-seat" d="M218.7,890.6c-12.9-3-25.7-7.1-38-12.3c-1.9-0.8-3.6-1.6-5.5-2.5l-16.5,36.4c2.2,1,4.1,1.9,6.3,2.9
              c14.7,6.2,29.8,11.1,45.1,14.6L218.7,890.6z" />
                <path className="house-seat activeSeat" data-sitting={10717} d="M215,930.8c18.1,3.8,36.5,5.7,55,5.7v-40c-15.4,0-31-1.6-46.5-4.8L215,930.8z" /> {/* Nick Xenophon */}
                <path className="house-seat activeSeat" data-sitting={10832} d="M231.4,832c-10.9-2.6-21.4-6.2-31.5-10.7l-16.7,36.4c12.5,5.7,25.9,10.2,39.7,13.4L231.4,832z" /> {/* David Leyonhjelm */}
                <path className="house-seat activeSeat" data-sitting={10828} d="M227.8,872.1c13.8,2.8,28.1,4.4,42.2,4.4v-40c-11.6,0-22.8-1.2-33.7-3.4L227.8,872.1z" /> {/* Bob Day */}
                <path className="house-seat activeSeat" data-sitting={10759} d="M270,776.5c-16,0-31.4-3.5-45.3-9.8l-16.7,36.4c19,8.6,39.9,13.4,61.9,13.4V776.5z" /> {/* John Madigan */}

                {/* Leader of the Opposition */}
                <rect className="house-seat activeSeat" data-sitting={10678} x={368} y="247.5" width={32} height={32} /> {/* Penny Wong */}

                {/* Opposition Whips */}
                <polygon className="house-seat activeSeat" data-sitting={10419} points="634,173 634,142.5 614,142.5 594,142.5 594,173 " /> {/* Gavin Marshall */}
                <rect className="house-seat activeSeat" data-sitting={10705} x={594} y={178} width={40} height="30.5" /> {/* Catryna Bilyk */}
                <polygon className="house-seat activeSeat" data-sitting={10433} points="574,173 574,142.5 554,142.5 534,142.5 534,173 " /> {/* Anne McEwen */}
                <rect className="house-seat activeSeat" data-sitting={10763} x={534} y={178} width={40} height="30.5" /> {/* Anne Urquhart */}
                <polygon className="house-seat activeSeat" data-sitting={10463} points="514,173 514,142.5 494,142.5 474,142.5 474,173 " /> {/* Claire Moore */}
                <rect className="house-seat activeSeat" data-sitting={10142} x={474} y={178} width={40} height="30.5" /> {/* Stephen Conroy */}

                {/* Shadow Ministers One */}
                <rect className="house-seat activeSeat" data-sitting={10757} x={594} y="247.5" width={40} height="29.5" /> {/* Alex Gallacher */}
                <rect className="house-seat activeSeat" data-sitting={10839} x={594} y={282} width={40} height="30.5" /> {/* Jenny McAllister */}
                <rect className="house-seat activeSeat" data-sitting={10610} x={534} y="247.5" width={40} height="29.5" /> {/* Glenn Sterle */}
                <rect className="house-seat activeSeat" data-sitting={10826} x={534} y={282} width={40} height="30.5" /> {/* Joe Bullock */}
                <rect className="house-seat activeSeat" data-sitting={10103} x={474} y="247.5" width={40} height="29.5" /> {/* Kim Carr */}
                <rect className="house-seat activeSeat" data-sitting={10838} x={474} y={282} width={40} height="30.5" /> {/* Katy Gallagher */}

                {/* Shadow Ministers Two */}
                <rect className="house-seat activeSeat" data-sitting={10447} x={594} y="351.5" width={40} height="30.5" /> {/* Jan McLucas */}
                <rect className="house-seat activeSeat" data-sitting={10397} x={594} y={387} width={40} height="30.5" /> {/* Joe Ludwig */}
                <rect className="house-seat activeSeat" data-sitting={10782} x={534} y="351.5" width={40} height="30.5" /> {/* Sue Lines */}
                <rect className="house-seat activeSeat" data-sitting={10820} x={534} y={387} width={40} height="30.5" /> {/* Nova Peris */}
                <rect className="house-seat activeSeat" data-sitting={10706} x={474} y="351.5" width={40} height="30.5" /> {/* Doug Cameron */}
                <rect className="house-seat activeSeat" data-sitting={10135} x={474} y={387} width={40} height="30.5" /> {/* Jacinta Collins */}

                {/* Shadow Ministers Three */}
                <rect className="house-seat" x={594} y="456.5" width={40} height="29.5" />
                <rect className="house-seat" x={594} y={491} width={40} height="30.5" />
                <rect className="house-seat activeSeat" data-sitting={10747} x={534} y="456.5" width={40} height="29.5" /> {/* Deborah O'Neill */}
                <rect className="house-seat activeSeat" data-sitting={10829} x={534} y={491} width={40} height="30.5" /> {/* Chris Ketter */}
                <rect className="house-seat activeSeat" data-sitting={10515} x={474} y="456.5" width={40} height="29.5" /> {/* Helen Polley */}
                <rect className="house-seat activeSeat" data-sitting={10071} x={474} y={491} width={40} height="30.5" /> {/* Carol Brown */}

                {/* Shadow Ministers Four */}
                <rect className="house-seat" x={594} y="560.5" width={40} height="30.5" />
                <rect className="house-seat" x={594} y={596} width={40} height="30.5" />
                <rect className="house-seat" x={534} y="560.5" width={40} height="30.5" />
                <rect className="house-seat" x={534} y={596} width={40} height="30.5" />
                <rect className="house-seat activeSeat" data-sitting={10819} x={474} y="560.5" width={40} height="30.5" /> {/* Sam Dastyari */}
                <rect className="house-seat activeSeat" data-sitting={10761} x={474} y={596} width={40} height="30.5" /> {/* Lisa Singh */}

                {/* Shadow Ministers Five */}
                <path className="house-seat activeSeat" data-sitting={10830} d="M628.5,721.4c3.7-17.9,5.5-36.3,5.5-54.9h-40c0,15.7-1.5,31.2-4.6,46.4L628.5,721.4z" /> {/* Jaqui Lambie */}
                <path className="house-seat activeSeat" data-sitting={10834} d="M588.4,717.8c-2.9,13-7,25.8-12.3,38.3c-0.8,2-1.7,3.9-2.6,5.9l36.4,16.5c1-2.3,2-4.5,3-6.8
              c6.3-14.8,11.1-29.9,14.5-45.4L588.4,717.8z" /> {/* Ricky Muir */}
                <path className="house-seat activeSeat" data-sitting={10837} d="M569.8,708.6c2.8-13.6,4.2-27.7,4.2-42.1h-40c0,11.5-1.2,22.8-3.3,33.7L569.8,708.6z" /> {/* Dio Wang */}
                <path className="house-seat" d="M529.6,705.1c-2.6,11.1-6.2,21.8-10.8,32l36.4,16.5c5.8-12.7,10.4-26.1,13.5-40.1L529.6,705.1z" />
                <path className="house-seat activeSeat" data-sitting={10831} d="M464.1,712.2l36.4,16.5c8.6-19,13.5-40.1,13.5-62.3h-40C474,682.8,470.5,698.3,464.1,712.2z" /> {/* Glenn Lazarus */}

                {/* Shadow Ministers Six */}
                <path className="house-seat activeSeat" data-sitting={10836} d="M556.4,856.4c10-10.1,19.1-21,27.3-32.4l-32.6-23.3c-6.9,9.7-14.6,18.8-23.1,27.4L556.4,856.4z" /> {/* Janet Rice */}
                <path className="house-seat activeSeat" data-sitting={10842} d="M524.5,831.6c-8.5,8.2-17.4,15.7-26.9,22.5l23.3,32.6c11.3-8,22-17,32-26.7L524.5,831.6z" /> {/* Robert Simms */}
                <path className="house-seat activeSeat" data-sitting={10780} d="M513.8,813.8c7.6-7.7,14.6-16,20.9-24.9l-32.5-23.3c-5,7-10.6,13.7-16.6,19.8L513.8,813.8z" /> {/* Peter Whish-Wilson */}
                <path className="house-seat activeSeat" data-sitting={10711} d="M482,789c-6,5.8-12.5,11.2-19.4,16.1l23.3,32.5c8.6-6.2,16.8-13,24.4-20.4L482,789z" /> {/* Sarah Hanson-Young */}
                <path className="house-seat activeSeat" data-sitting={10584} d="M453.4,730.8c-7.1,9.9-15.8,18.5-25.7,25.6l23.3,32.5c13.5-9.6,25.3-21.4,34.9-34.9L453.4,730.8z" /> {/* Rachel Siewert */}

                {/* Shadow Ministers Seven */}
                <path className="house-seat activeSeat" data-sitting={10841} d="M458.8,876.3c-1.6,0.7-3.2,1.4-4.8,2.1c-12.9,5.4-26.1,9.7-39.6,12.7l8.5,39.1c15.9-3.5,31.5-8.5,46.7-14.9
              c1.9-0.8,3.8-1.6,5.7-2.5L458.8,876.3z" /> {/* Nick McKim */}
                <path className="house-seat activeSeat" data-sitting={10760} d="M409.5,892.1c-14.7,2.9-29.8,4.4-45,4.4H363v40h1.5c18.1,0,36-1.8,53.6-5.3L409.5,892.1z" /> {/* Lee Rhiannon */}
                <path className="house-seat activeSeat" data-sitting={10764} d="M410.2,871.5c14-3.1,27.5-7.7,40.3-13.5L434,821.6c-10.3,4.6-21.1,8.3-32.3,10.8L410.2,871.5z" /> {/* Larissa Waters */}
                <path className="house-seat activeSeat" data-sitting={10713} d="M396.8,833.4c-10.4,2-21.2,3.1-32.3,3.1H363v40h1.5c14,0,27.6-1.4,40.8-4L396.8,833.4z" /> {/* Scott Ludlam */}
                <path className="house-seat activeSeat" data-sitting={10755} d="M409.2,767c-13.6,6.1-28.7,9.5-44.7,9.5H363v40h1.5c21.8,0,42.5-4.7,61.2-13.1L409.2,767z" /> {/* Richard Di Natale */}
              </svg>
            </div>
        )
    }
}

PopupSenate.propTypes = {
    polId: React.PropTypes.string
};

PopupSenate.defaultProps = {
};

export default PopupSenate;
