// Import React and HelloText class
import React from 'react';

// Create class called WelcomeScreen that extends the base React Component class
class PopupRepresentatives extends React.Component {
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
              <svg viewBox="0 0 620 745.8">
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.bit{fill:rgba(16, 41, 59,0.5);}.house-seat{fill:rgba(16, 41, 59, 1);}.house-seat.selected{fill:#FFFFFF;}\n" }} />

                {/* Top Right */}
                <rect data-id="test" x={451} y="9.8" className="bit" width={39} height={61} />
                <rect x={498} y="9.8" className="bit" width={39} height={61} />
                <rect x={545} y="9.8" className="bit" width={28} height={61} />

                {/* Top Left */}
                <rect x={130} y="9.8" className="bit" width={39} height={61} />
                <rect x={83} y="9.8" className="bit" width={39} height={61} />
                <rect x={47} y="9.8" className="bit" width={28} height={61} />

                {/* Left Seats 1 */}
                <rect data-sitting={10800} data-name="Fiona Scott" data-electorate="Lindsay" y="98.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10725} data-name="John Alexander" data-electorate="Bennelong" y="131.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10785} data-name="Nickolas Varvaris" data-electorate="Barton" x={36} y="98.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10795} data-name="Ann Sudmalis" data-electorate="Gilmore" x={36} y="131.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10790} data-name="Sarah Henderson" data-electorate="Corangamite" x={83} y="98.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10808} data-name="Luke Howarth" data-electorate="Petrie" x={83} y="131.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10792} data-name="Karen McNamara" data-electorate="Dobell" x={130} y="98.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10736} data-name="Natasha Griggs" data-electorate="Solomon" x={130} y="131.8" className="house-seat" width={39} height={28} />

                {/* Left Seats 2 */}
                <rect data-sitting={10843} data-name="Andrew Hastie" data-electorate="Canning" y="174.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10026} data-name="Bob Baldwin" data-electorate="Peterson" y="207.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10786} data-name="Andrew Nikolic" data-electorate="Bass" x={36} y="174.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10417} data-name="Louise Markus" data-electorate="Macquarie" x={36} y="207.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10811} data-name="Lucy Wicks" data-electorate="Robertson" x={83} y="174.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10802} data-name="Eric Hutchinson" data-electorate="Lyons" x={83} y="207.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10796} data-name="Matt Williams" data-electorate="Hindmarsh" x={130} y="174.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10783} data-name="David Coleman" data-electorate="Banks" x={130} y="207.8" className="house-seat" width={39} height={28} />

                {/* Left Seats 3 */}
                <rect data-sitting={10069} data-name="Russell Broadbent" data-electorate="McMillan" y="250.8" className="house-seat" width={28} height={28} />
                <rect y="283.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10816} data-name="Rick Wilson" data-electorate="O'Connor" x={36} y="283.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10588} data-name="Luke Simpkins" data-electorate="Cowan" x={36} y="250.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10791} data-name="Michael Sukkar" data-electorate="Deakin" x={83} y="250.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10739} data-name="Russell Matheson" data-electorate="Macarthur" x={83} y="283.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10743} data-name="Michael McCormack" data-electorate="Riverina" x={130} y="250.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10745} data-name="Karen Andrews" data-electorate="McPherson" x={130} y="283.8" className="house-seat" width={39} height={28} />

                {/* Left Seats 4 */}
                <rect data-sitting={10844} data-name="Trent Zimmerman" data-electorate="North Sydney" y="372.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10203} data-name="Warren Entsch" data-electorate="Leichhardt" y="339.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10651} data-name="Ross Vasta" data-electorate="Bonner" x={36} y="339.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10729} data-name="Bert Van Manen" data-electorate="Forde" x={36} y="372.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10784} data-name="Tony Pasin" data-electorate="Barker" x={83} y="339.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10818} data-name="Melissa Price" data-electorate="Durack" x={83} y="372.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10290} data-name="Alex Hawke" data-electorate="Mitchell" x={130} y="372.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10730} data-name="Ken Wyatt" data-electorate="Hasluck"  x={130} y="339.8" className="house-seat" width={39} height={28} />

                {/* Right Seats 1 */}
                <rect data-sitting={10805} data-name="Sharon Claydon" data-electorate="Newcastle" x={592} y="98.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10812} data-name="Andrew Giles" data-electorate="Scullin" x={592} y="131.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10733} data-name="Rob Mitchell" data-electorate="McEwen" x={545} y="98.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10787} data-name="Lisa Chesters" data-electorate="Bendigo" x={545} y="131.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10599} data-name="Warren Snowdon" data-electorate="Lingiari" x={498} y="98.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10512} data-name="Graham Perrett" data-electorate="Moreton" x={498} y="131.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10503} data-name="Julie Owens" data-electorate="Parramatta" x={451} y="131.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10762} data-name="Matt Thistlethwaite" data-electorate="Kingsford Smith" x={451} y="98.8" className="house-seat" width={39} height={28} />

                {/* Right Seats 2 */}
                <rect data-sitting={10632} data-name="Kelvin Thomson" data-electorate="Wills" x={451} y="174.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10267} data-name="Alan Griffin" data-electorate="Bruce" x={451} y="207.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10080} data-name="Anna Burke" data-electorate="Chisholm" x={498} y="174.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10649} data-name="Maria Vamvakinou" data-electorate="Calwell" x={498} y="207.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10825} data-name="Terri Butler" data-electorate="Griffith" x={545} y="174.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10814} data-name="Clare O'Neil" data-electorate="Hotham" x={545} y="207.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10111} data-name="Nick Champion" data-electorate="Wakefield" x={592} y="174.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10749} data-name="Ed Husic" data-electorate="Chifley" x={592} y="207.8" className="house-seat" width={28} height={28} />

                {/* Right Seats 3 */}
                <rect data-name="" data-electorate="" x={451} y="250.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10088} data-name="Anthony Byrne" data-electorate="Holt" x={451} y="283.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10217} data-name="Laurie Ferguson" data-electorate="Werriwa" x={498} y="250.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10195} data-name="Justine Elliot" data-electorate="Richmond" x={498} y="283.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10142} data-name="Stephen Conroy" data-electorate="Victoria" x={545} y="250.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10794} data-name="Tim Watts" data-electorate="Gellibrand" x={545} y="283.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10807} data-name="Alannah MacTiernan" data-electorate="Perth" x={592} y="283.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10738} data-name="Gai Brodtmann" data-electorate="Canberra" x={592} y="250.8" className="house-seat" width={28} height={28} />

                {/* Right Seats 4 */}
                <rect data-sitting={10275} data-name="Jill Hall" data-electorate="Shortland" x={451} y="339.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10294} data-name="Chris Hayes" data-electorate="Fowler" x={451} y="372.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10542} data-name="Bernie Ripoll" data-electorate="Oxley" x={498} y="339.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10799} data-name="Joanne Ryan" data-electorate="Lalor" x={498} y="372.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10617} data-name="Wayne Swan" data-electorate="Lilley" x={545} y="339.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10506} data-name="Melissa Parke" data-electorate="Fremantle" x={545} y="372.8" className="house-seat" width={39} height={28} />
                <rect data-sitting={10165} data-name="Michael Danby" data-electorate="Melbourne Ports" x={592} y="339.8" className="house-seat" width={28} height={28} />
                <rect data-sitting={10695} data-name="Tony Zappia" data-electorate="Makin" x={592} y="372.8" className="house-seat" width={28} height={28} />

                {/* Back Second Row Left */}
                <path data-sitting={10553} data-name="Philip Ruddock" data-electorate="Berowra" className="house-seat" d="M79.6,482.5c-2.6-13-4.1-26.3-4.5-39.7h-39c0.4,16,2.1,31.8,5.2,47.3L79.6,482.5z" />
                <path data-sitting={10545} data-name="Stuart Robert" data-electorate="Fadden" className="house-seat" d="M42.3,495c3,13.8,7.1,27.4,12.3,40.7l36-14.9c-4.2-10.9-7.6-22-10.1-33.4L42.3,495z" />
                <path data-sitting={10046} data-name="Bronwyn Bishop" data-electorate="Mackellar" className="house-seat" d="M110.7,560.9c-6.2-9.8-11.6-20.1-16.3-30.9l-36,14.9c5.7,13.1,12.3,25.7,19.9,37.6L110.7,560.9z" />
                <path data-sitting={10804} data-name="Ian Goodenough" data-electorate="Moore" className="house-seat" d="M81,586.8c8,12.2,17,23.7,26.9,34.6l28.4-26.8c-8.4-9.2-16.1-19.1-22.9-29.5L81,586.8z" />
                <path data-sitting={10721} data-name="Jamie Briggs" data-electorate="Mayo" className="house-seat" d="M174.8,628.6c-8.1-5.7-15.8-11.9-23.1-18.6l-26.8,28.4c9.1,8.3,18.7,16,28.7,23L174.8,628.6z" />
                <path data-sitting={10529} data-name="Rowan Ramsey" data-electorate="Grey" className="house-seat" d="M156.1,663c10.1,6.9,20.6,13,31.6,18.5l15-36.1c-8.8-4.5-17.2-9.6-25.4-15.1L156.1,663z" />
                <path data-sitting={10285} data-name="Luke Hartsuyker" data-electorate="Cowper" className="house-seat" d="M249.7,663.5c-10.6-2.8-21-6.4-31.2-10.7c-2.3-1-4.6-2-6.8-3l-14.9,36.1c2.2,1,4.3,1.9,6.5,2.9
          c12.7,5.4,25.6,9.7,38.8,13.1L249.7,663.5z" />
                <path data-sitting={10641} data-name="Warren Truss" data-electorate="Wide Bay" className="house-seat" d="M252.6,664.2l-7.6,38.3c15.4,3.8,31.1,6.2,47,7.2v-39.1C278.6,669.6,265.5,667.5,252.6,664.2z" />

                {/* Back Third Row Left */}
                <path data-sitting={10612} data-name="Sharman Stone" data-electorate="Murray" className="house-seat" d="M125.7,473.4c-2-9.9-3.2-20.1-3.6-30.5h-39c0.4,12.9,1.8,25.7,4.3,38.2L125.7,473.4z" />
                <path data-sitting={10041} data-name="Bruce Billson" data-electorate="Dunkley" className="house-seat" d="M126.7,478.2l-38.3,7.6c2.4,10.9,5.6,21.5,9.6,31.9l36.2-15C131.1,494.9,128.7,486.7,126.7,478.2z" />
                <path data-sitting={10326} data-name="Steve Irons" data-electorate="Swan" className="house-seat" d="M149.9,534.8c-4.5-7.3-8.5-14.8-12-22.7l-36.2,15c4.4,10.2,9.6,20,15.6,29.5L149.9,534.8z" />
                <path data-sitting={10014} data-name="Kevin Andrews" data-electorate="Menzies" className="house-seat" d="M152.6,539l-32.5,21.7c6.5,10,13.9,19.5,22.1,28.4l28.4-26.8C164,555,158,547.2,152.6,539z" />
                <path data-sitting={10001} data-name="Tony Abbott" data-electorate="Warringah" className="house-seat" d="M200.4,589c-5.7-4.1-11.2-8.5-16.4-13.2l-26.8,28.4c7,6.4,14.4,12.3,22,17.7L200.4,589z" />
                <path data-sitting={10544} data-name="Andrew Robb" data-electorate="Goldstein" className="house-seat" d="M202.9,590.7l-21.3,32.9c7.7,5.3,15.8,10.2,24.1,14.5l15-36.3C214.6,598.4,208.6,594.7,202.9,590.7z" />
                <path data-sitting={10789} data-name="Michelle Landry" data-electorate="Capricornia" className="house-seat" d="M258.9,617.2c-10.1-2.9-19.8-6.5-29.2-10.9l-15,36.2c11.7,5.4,24,9.8,36.5,13.2L258.9,617.2z" />
                <path data-sitting={10728} data-name="Ken O'Dowd" data-electorate="Flynn" className="house-seat" d="M261.8,618l-7.6,38.4c12.3,3.1,25,5.2,37.9,6.2v-39.2C281.7,622.5,271.5,620.6,261.8,618z" />

                {/* Back Second Row Right */}
                <path data-name="" data-electorate="" className="house-seat" d="M578.7,490.1c3.1-15.5,4.8-31.3,5.2-47.3h-39c-0.4,13.4-1.9,26.7-4.5,39.7L578.7,490.1z" />
                <path data-name="" data-electorate="" className="house-seat" d="M539.4,487.4c-2.5,11.3-5.9,22.5-10.1,33.4l36,14.9c5.2-13.3,9.3-26.9,12.3-40.7L539.4,487.4z" />
                <path data-name="" data-electorate="" className="house-seat" d="M541.7,582.6c7.6-12,14.2-24.5,19.9-37.6l-36-14.9c-4.7,10.7-10.1,21-16.3,30.9L541.7,582.6z" />
                <path data-name="" data-electorate="" className="house-seat" d="M506.6,565.1c-6.8,10.4-14.4,20.2-22.9,29.5l28.4,26.8C522,610.5,531,599,539,586.8L506.6,565.1z" />
                <path data-sitting={10823} data-name="Clive Palmer" data-electorate="Fairfax" className="house-seat" d="M445.2,628.6c8.1-5.7,15.8-11.9,23.1-18.6l26.8,28.4c-9.1,8.3-18.7,16-28.7,23L445.2,628.6z" />
                <path data-sitting={10798} data-name="Cathy McGowan" data-electorate="Indi" className="house-seat" d="M463.9,663c-10.1,6.9-20.6,13-31.6,18.5l-15-36.1c8.8-4.5,17.2-9.6,25.4-15.1L463.9,663z" />
                <path data-sitting={10565} data-name="Bruce Scott" data-electorate="Maranoa" className="house-seat" d="M370.3,663.5c10.6-2.8,21-6.4,31.2-10.7c2.3-1,4.6-2,6.8-3l14.9,36.1c-2.2,1-4.3,1.9-6.5,2.9
          c-12.7,5.4-25.6,9.7-38.8,13.1L370.3,663.5z" />
                <path data-sitting={10803} data-name="Andrew Broad" data-electorate="Mallee" className="house-seat" d="M367.4,664.2l7.6,38.3c-15.4,3.8-31.1,6.2-47,7.2v-39.1C341.4,669.6,354.5,667.5,367.4,664.2z" />

                {/* Back Third Row Right */}
                <path data-name="" data-electorate="" className="house-seat" d="M532.6,481c2.5-12.5,3.9-25.2,4.3-38.2h-39c-0.4,10.4-1.6,20.6-3.6,30.5L532.6,481z" />
                <path data-name="" data-electorate="" className="house-seat" d="M493.3,478.2c-1.9,8.4-4.4,16.6-7.4,24.5l36.2,15c4-10.4,7.2-21,9.6-31.9L493.3,478.2z" />
                <path data-name="" data-electorate="" className="house-seat" d="M502.6,556.5c5.9-9.5,11.1-19.3,15.6-29.5l-36.2-15c-3.5,7.9-7.5,15.5-12,22.7L502.6,556.5z" />
                <path data-sitting={10734} data-name="Adam Bandt" data-electorate="Melbourne" className="house-seat" d="M467.4,539c-5.4,8.2-11.4,16-18,23.3l28.4,26.8c8.2-8.9,15.5-18.5,22.1-28.4L467.4,539z" />
                <path data-sitting={10727} data-name="Andrew Wilkie" data-electorate="Denison" className="house-seat" d="M419.6,589c5.7-4.1,11.2-8.5,16.4-13.2l26.8,28.4c-7,6.4-14.4,12.3-22,17.7L419.6,589z" />
                <path data-sitting={10352} data-name="Bob Katter" data-electorate="Kennedy" className="house-seat" d="M417.1,590.7l21.3,32.9c-7.7,5.3-15.8,10.2-24.1,14.5l-15-36.3C405.4,598.4,411.4,594.7,417.1,590.7z" />
                <path data-sitting={10801} data-name="avid Gillespie" data-electorate="Lyne" className="house-seat" d="M361.1,617.2c10.1-2.9,19.8-6.5,29.2-10.9l15,36.2c-11.7,5.4-24,9.8-36.5,13.2L361.1,617.2z" />
                <path data-sitting={10127} data-name="John Cobb" data-electorate="Calare" className="house-seat" d="M358.2,618l7.6,38.4c-12.3,3.1-25,5.2-37.9,6.2v-39.2C338.3,622.5,348.5,620.6,358.2,618z" />

                {/* Front Bench Seats Right */}
                <polygon data-sitting={10230} data-name="Joel Fitzgibbon" data-electorate="Hunter" className="house-seat" points="408,9.8 408,18.3 408,28.7 443,28.7 443,9.8 " />
                <rect data-sitting={10496} data-name="Brendan O'Connor" data-electorate="Gorton" x={408} y="31.7" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10007} data-name="Albanese" data-electorate="Grayndler" x={408} y="53.6" className="house-seat" width={35} height="18.9" />
                <polygon data-sitting={10409} data-name="Jenny Macklin" data-electorate="Jagajaga" className="house-seat" points="408,75.5 408,82.7 408,94.4 443,94.4 443,75.5 " />
                <rect data-sitting={10181} data-name="Mark Dreyfus" data-electorate="Isaacs" x={408} y="97.4" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10081} data-name="Tony Burke" data-electorate="Watson" x={408} y="119.3" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10580} data-name="Bill Shorten" data-electorate="Maribyrnong" x={408} y="141.2" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10513} data-name="Tanya Plibersek" data-electorate="Sydney" x={408} y={163} className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10060} data-name="Chris Bowen" data-electorate="McMahon" x={408} y="184.9" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10198} data-name="Kate Ellis" data-electorate="Adelaide" x={408} y="206.8" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10418} data-name="Marles" data-electorate="Corio" x={408} y="228.7" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10086} data-name="Mark Butler" data-electorate="Port Adelaide" x={408} y="250.6" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10123} data-name="Jason Clare" data-electorate="Blaxland" x={408} y="272.5" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10136} data-name="Julie Collins" data-electorate="Franklin" x={408} y="294.4" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10386} data-name="Catherine King" data-electorate="Ballarat" x={408} y="316.3" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10264} data-name="Gary Gray" data-electorate="Brand" data-name="" data-electorate="" x={408} y="338.2" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10751} data-name="Michelle Rowland" data-electorate="Greenway" x={408} y={360} className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10485} data-name="Shayne Neumann" data-electorate="Blair" x={408} y="381.9" className="house-seat" width={35} height="18.9" />

                {/* Front Bench Seats Left */}
                <polygon data-sitting={10741} data-name="Josh Frydenberg" data-electorate="Kooyung" className="house-seat" points="177,9.8 177,28.7 212,28.7 212,18.3 212,9.8 " />
                <rect data-sitting={10387} data-name="Sussan Ley" data-electorate="Farrer" x={177} y="31.7" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10319} data-name="Greg Hunt" data-electorate="Flinders" x={177} y="53.6" className="house-seat" width={35} height="18.9" />
                <polygon data-sitting={10188} data-name="Peter Dutton" data-electorate="Dickson" className="house-seat" points="177,75.4 177,94.3 212,94.3 212,82.7 212,75.4 " />
                <rect data-sitting={10468} data-name="Scott Morrison" data-electorate="Cook" x={177} y="97.3" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10524} data-name="Christopher Pyne" data-electorate="Sturt" x={177} y="119.2" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10643} data-name="Malcolm Turnbull" data-electorate="Wentworth" x={177} y={141} className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10047} data-name="Julie Bishop" data-electorate="Curtin" x={177} y="162.9" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10350} data-name="Barnaby Joyce" data-electorate="New England" x={177} y="184.8" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10815} data-name="Christian Porter" data-electorate="Pearce" x={177} y="206.7" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10724} data-name="Kelly O'Dwyer" data-electorate="Higgins" x={177} y="228.5" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10122} data-name="Steven Ciobo" data-electorate="Moncrieff" x={177} y="250.4" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10703} data-name="Darren Chester" data-electorate="Gippsland" x={177} y="272.3" className="house-seat" width={35} height="18.9" />
                <rect data-sitting={10356} data-name="Michael Keenan" data-electorate="Stirling" x={177} y="294.1" className="house-seat" width={35} height="18.9" />

                <rect data-name="" data-electorate="" ref="26" x={177} y={316} className="house-seat" width={35} height="18.9" />
                <rect data-name="" data-electorate="" x={177} y="337.9" className="house-seat" width={35} height="18.9" />
                <rect data-name="" data-electorate="" x={177} y="359.7" className="house-seat" width={35} height="18.9" />
                <rect data-name="" data-electorate="" x={177} y="381.6" className="house-seat" width={35} height="18.9" />

                {/* First Row Left Back */}
                <path data-sitting={10416} data-name="Nola Marino" data-electorate="Forrest" className="house-seat" d="M30.6,474.7c-1.4-10.5-2.3-21.2-2.5-31.9h-28c0.2,12,1.2,23.8,2.8,35.5L30.6,474.7z" />
                <path data-sitting={10744} data-name="Ewen Jones" data-electorate="Herbert" className="house-seat" d="M3.6,483.3c1.7,10.9,3.9,21.7,6.8,32.4l27-7.2c-2.5-9.5-4.5-19.1-6-28.8L3.6,483.3z" />
                <path data-sitting={10788} data-name="Brett Whiteley" data-electorate="Braddon" className="house-seat" d="M38.7,513.3l-27,7.2c2.8,9.8,6,19.4,9.7,29l25.9-10.7C44,530.4,41.1,521.9,38.7,513.3z" />
                <path data-sitting={10679} data-name="Jason Wood" data-electorate="La Trobe" className="house-seat" d="M62.9,572.2c-4.3-7.8-8.3-15.9-11.8-24.2l-25.9,10.7c4,9.4,8.5,18.6,13.5,27.5L62.9,572.2z" />
                <path data-sitting={10403} data-name="Ian Macfarlane" data-electorate="Groom" className="house-seat" d="M41.1,590.6c5.5,9.6,11.5,18.9,18,27.8l22.2-17c-5.8-8-11.1-16.2-16-24.8L41.1,590.6z" />
                <path data-sitting={10070} data-name="Mal Brough" data-electorate="Fisher" className="house-seat" d="M84.3,605.4l-22.2,17c6.2,8.2,12.7,16.1,19.7,23.7l20.4-19.2C95.8,620,89.9,612.8,84.3,605.4z" />
                <path data-sitting={10239} data-name="Teresa Gambaro" data-electorate="Brisbane" className="house-seat" d="M138.5,660.2c-6.6-5-12.9-10.4-19.1-16l-19.2,20.4c7,6.4,14.2,12.5,21.7,18.2L138.5,660.2z" />
                <path data-sitting={10377} data-name="Andrew Laming" data-electorate="Bowman" className="house-seat" d="M146.7,699.8l13.8-24.4c-6.7-4.2-13.2-8.6-19.5-13.4l-16.6,22.5C131.5,690,139,695.1,146.7,699.8z" />
                <path data-sitting={10752} data-name="Scott Buchholz" data-electorate="Wright" className="house-seat" d="M149.2,701.4c8,4.9,16.2,9.3,24.7,13.5l10.7-25.9c-7.4-3.7-14.6-7.7-21.7-12L149.2,701.4z" />
                <path data-sitting={10601} data-name="Andrew Southcott" data-electorate="Boothby" className="house-seat" d="M224,704.9c-8-2.6-16-5.5-23.8-8.8c-2.2-0.9-4.3-1.9-6.5-2.9L183,719.1c2.1,0.9,4.2,1.9,6.3,2.8
          c9,3.8,18.2,7.2,27.4,10.1L224,704.9z" />
                <path data-sitting={10750} data-name="Craig Kelly" data-electorate="Hughes" className="house-seat" d="M219.6,732.9c11.2,3.4,22.5,6.2,34,8.3l3.6-27.8c-10.3-1.9-20.4-4.5-30.4-7.6L219.6,732.9z" />
                <path data-sitting={10337} data-name="Dennis Jensen" data-electorate="Tangney" className="house-seat" d="M260.2,713.9l-3.6,27.8c11.7,2,23.5,3.4,35.5,4.1v-28.1C281.3,717.1,270.7,715.8,260.2,713.9z" />

                {/* First Row Right Back */}
                <path data-name="" data-electorate="" className="house-seat" d="M617.1,478.4c1.6-11.7,2.5-23.6,2.8-35.5h-28c-0.2,10.7-1.1,21.4-2.5,31.9L617.1,478.4z" />
                <path data-name="" data-electorate="" className="house-seat" d="M609.7,515.7c2.8-10.7,5.1-21.5,6.8-32.4l-27.8-3.7c-1.5,9.7-3.5,19.3-6,28.8L609.7,515.7z" />
                <path data-name="" data-electorate="" className="house-seat" d="M581.3,513.3c-2.4,8.6-5.3,17.1-8.6,25.5l25.9,10.7c3.7-9.5,7-19.2,9.7-29L581.3,513.3z" />
                <path data-name="" data-electorate="" className="house-seat" d="M581.4,586.2c4.9-8.9,9.4-18,13.5-27.5L568.9,548c-3.6,8.3-7.5,16.3-11.8,24.2L581.4,586.2z" />
                <path data-name="" data-electorate="" className="house-seat" d="M560.9,618.4c6.5-8.9,12.5-18.2,18-27.8l-24.2-14c-4.9,8.5-10.2,16.8-16,24.8L560.9,618.4z" />
                <path data-name="" data-electorate="" className="house-seat" d="M535.7,605.4c-5.6,7.4-11.5,14.6-17.8,21.5l20.4,19.2c7-7.6,13.5-15.5,19.7-23.7L535.7,605.4z" />
                <path data-name="" data-electorate="" className="house-seat" d="M481.5,660.2c6.6-5,12.9-10.4,19.1-16l19.2,20.4c-7,6.4-14.2,12.5-21.7,18.2L481.5,660.2z" />
                <path data-name="" data-electorate="" className="house-seat" d="M473.3,699.8l-13.8-24.4c6.7-4.2,13.2-8.6,19.5-13.4l16.6,22.5C488.5,690,481,695.1,473.3,699.8z" />
                <path data-name="" data-electorate="" className="house-seat" d="M470.8,701.4c-8,4.9-16.2,9.3-24.7,13.5l-10.7-25.9c7.4-3.7,14.6-7.7,21.7-12L470.8,701.4z" />
                <path data-name="" data-electorate="" className="house-seat" d="M396,704.9c8-2.6,16-5.5,23.8-8.8c2.2-0.9,4.3-1.9,6.5-2.9l10.7,25.9c-2.1,0.9-4.2,1.9-6.3,2.8
          c-9,3.8-18.2,7.2-27.4,10.1L396,704.9z" />
                <path data-name="" data-electorate="" className="house-seat" d="M400.4,732.9c-11.2,3.4-22.5,6.2-34,8.3l-3.6-27.8c10.3-1.9,20.4-4.5,30.4-7.6L400.4,732.9z" />
                <path data-name="" data-electorate="" className="house-seat" d="M359.8,713.9l3.6,27.8c-11.7,2-23.5,3.4-35.5,4.1v-28.1C338.7,717.1,349.3,715.8,359.8,713.9z" />

                {/* Fourth Row Left Back */}
                <path data-sitting={10732} data-name="Wyatt Roy" data-electorate="Longman" className="house-seat" d="M173.6,472.2c-2.5-9.4-4-19.3-4.5-29.4h-39c0.5,13.4,2.4,26.4,5.7,38.9L173.6,472.2z" />
                <path data-sitting={10793} data-name="Peter Hendy" data-electorate="Eden-Monaro" className="house-seat" d="M136.6,484.6c3.7,13.2,8.8,25.8,15.2,37.6l34-19c-4.8-8.8-8.6-18.2-11.5-28.1L136.6,484.6z" />
                <path data-sitting={10753} data-name="Jane Prentice" data-electorate="Ryan" className="house-seat" d="M187.3,505.8l-34,19c6.5,11.5,14.3,22.2,23.1,32l28.4-26.8C198.1,522.6,192.3,514.5,187.3,505.8z" />
                <path data-sitting={10817} data-name="Angus Taylor" data-electorate="Hume" className="house-seat" d="M237.5,557.2c-7.6-4.6-14.7-9.8-21.2-15.6l-26.8,28.4c8.9,8,18.6,15.2,29,21.3L237.5,557.2z" />
                <path data-sitting={10797} data-name="Keith Pitt" data-electorate="Hinkler" className="house-seat" d="M221.1,592.8c10.5,6,21.7,11,33.4,14.8l9.5-38c-8.3-2.9-16.3-6.5-23.9-10.9L221.1,592.8z" />
                <path data-sitting={10810} data-name="Craig Laundy" data-electorate="Reid" className="house-seat" d="M266.8,570.5l-9.5,37.9c11.1,3.4,22.7,5.8,34.7,7v-39.2C283.3,575.1,274.9,573.2,266.8,570.5z" />

                {/* Fourth Row Right Back */}
                <path data-name="" data-electorate="" className="house-seat" d="M446.4,472.2c2.5-9.4,4-19.3,4.5-29.4h39c-0.5,13.4-2.4,26.4-5.7,38.9L446.4,472.2z" />
                <path data-name="" data-electorate="" className="house-seat" d="M483.4,484.6c-3.7,13.2-8.8,25.8-15.2,37.6l-34-19c4.8-8.8,8.6-18.2,11.5-28.1L483.4,484.6z" />
                <path data-name="" data-electorate="" className="house-seat" d="M432.7,505.8l34,19c-6.5,11.5-14.3,22.2-23.1,32L415.2,530C421.9,522.6,427.7,514.5,432.7,505.8z" />
                <path data-sitting={10806} data-name="Kevin Hogan" data-electorate="Page" className="house-seat" d="M382.5,557.2c7.6-4.6,14.7-9.8,21.2-15.6l26.8,28.4c-8.9,8-18.6,15.2-29,21.3L382.5,557.2z" />
                <path data-sitting={10726} data-name="George Christensen" data-electorate="Dawson" className="house-seat" d="M398.9,592.8c-10.5,6-21.7,11-33.4,14.8l-9.5-38c8.3-2.9,16.3-6.5,23.9-10.9L398.9,592.8z" />
                <path data-sitting={10152} data-name="Mark Coulton" data-electorate="Parkes" className="house-seat" d="M353.2,570.5l9.5,37.9c-11.1,3.4-22.7,5.8-34.7,7v-39.2C336.7,575.1,345.1,573.2,353.2,570.5z" />

                {/* Front Bench Left Back */}
                <path data-sitting={10723} data-name="Paul Fletcher" data-electorate="Bradfield" className="house-seat" d="M215.5,462.3c-1.7-6.3-2.8-12.8-3.3-19.5h-35.1c0.5,9.8,2,19.4,4.5,28.5L215.5,462.3z" />
                <path data-sitting={10748} data-name="Alan Tudge" data-electorate="Aston" className="house-seat" d="M192.7,499l30.3-17.5c-2.9-5.5-5.2-11.3-7-17.3l-33.8,9.1C184.8,482.3,188.4,490.9,192.7,499z" />
                <path data-sitting={10742} data-name="Dan Tehan" data-electorate="Wannon" className="house-seat" d="M249.9,513.7c-5.1-4-9.8-8.4-14.1-13.3l-24.8,24.8c6.4,7.1,13.5,13.5,21.2,19.1L249.9,513.7z" />
                <path data-name="" data-electorate="" className="house-seat" d="M234.6,498.9c-4-4.8-7.5-10.1-10.6-15.6l-30.3,17.5c4.6,8.2,10,15.9,16.1,22.9L234.6,498.9z" />
                <path data-name="" data-electorate="" className="house-seat" d="M259.7,559.4l9.1-34.1c-6.2-2.9-12-6.3-17.4-10.3L234,545.4C241.9,551,250.6,555.7,259.7,559.4z" />
                <path data-name="" data-electorate="" className="house-seat" d="M261.6,560.2c9.6,3.8,19.8,6.5,30.4,7.9v-35.4c-7.4-1.4-14.5-3.6-21.3-6.6L261.6,560.2z" />

                {/* Front Bench Right Back */}
                <path data-sitting={10043} data-name="Sharon Bird" data-electorate="Cunningham" className="house-seat" d="M438.3,471.3c2.5-9.2,4.1-18.7,4.5-28.5h-35.1c-0.4,6.7-1.6,13.2-3.3,19.5L438.3,471.3z" />
                <path data-sitting={10709} data-name="David Feeney" data-electorate="Batman" className="house-seat" d="M404,464.2c-1.8,6-4.1,11.8-7,17.3l30.3,17.5c4.4-8.1,7.9-16.7,10.5-25.7L404,464.2z" />
                <path data-sitting={10746} data-name="Andrew Leigh" data-electorate="Fraser" className="house-seat" d="M426.3,500.7L396,483.3c-3,5.5-6.6,10.8-10.6,15.6l24.8,24.8C416.4,516.6,421.8,508.9,426.3,500.7z" />
                <path data-sitting={10809} data-name="Jim Chalmers" data-electorate="Rankin" className="house-seat" d="M384.1,500.4c-4.2,4.9-8.9,9.4-14.1,13.3l17.6,30.5c7.7-5.6,14.8-12,21.2-19.1L384.1,500.4z" />
                <path data-sitting={10740} data-name="Stephen Jones" data-electorate="Throsby" className="house-seat" d="M386,545.4L368.5,515c-5.4,4-11.2,7.5-17.4,10.3l9.1,34.1C369.4,555.7,378.1,551,386,545.4z" />
                <path data-sitting={10543} data-name="Amanda Rishworth" data-electorate="Kingston" className="house-seat" d="M349.3,526.1c-6.7,3-13.9,5.2-21.3,6.6v35.4c10.6-1.4,20.8-4.1,30.4-7.9L349.3,526.1z" />

                {/* Desks and stuff */}
                <polygon className="bit" points="360.8,126.8 259.3,126.8 259.3,191.2 270.1,191.2 270.1,306.2 349.9,306.2 349.9,191.2 360.8,191.2 " />
                <rect className="bit" x="274.5" y="358.3" width={71} height="32.6" />

                {/* Speaker */}
                <rect data-sitting={10592} data-name="Tony Smith" data-electorate="Casey" x="294.7" className="house-seat" width="30.6" height="30.6" />

                {/* Centre */}
                <polygon className="bit" points="304.9,96.4 282.3,96.4 282.3,96.5 276.6,96.5 276.6,119.2 299.3,119.2 299.3,119.1 304.9,119.1 " />
                <polygon className="bit" points="340.8,96.4 318.2,96.4 318.2,96.5 312.5,96.5 312.5,119.2 335.2,119.2 335.2,119.1 340.8,119.1 " />
                <polygon className="bit" points="306.2,398.4 283.5,398.4 283.5,398.5 277.9,398.5 277.9,421.2 300.6,421.2 300.6,421.1 306.2,421.1 " />
                <polygon className="bit" points="342.1,398.4 319.4,398.4 319.4,398.5 313.8,398.5 313.8,421.2 336.5,421.2 336.5,421.1 342.1,421.1 " />
                <polygon className="bit" points="239.7,254.3 239.7,276.9 239.8,276.9 239.8,282.6 262.5,282.6 262.5,259.9 262.4,259.9 262.4,254.3 " />
                <polygon className="bit" points="239.7,211.4 239.7,234 239.8,234 239.8,239.7 262.5,239.7 262.5,217 262.4,217 262.4,211.4 " />
                <polygon className="bit" points="380.3,254.3 380.3,276.9 380.2,276.9 380.2,282.6 357.5,282.6 357.5,259.9 357.6,259.9 357.6,254.3 " />
                <polygon className="bit" points="380.3,211.4 380.3,234 380.2,234 380.2,239.7 357.5,239.7 357.5,217 357.6,217 357.6,211.4 " />
              </svg>
            </div>
        )
    }
}

PopupRepresentatives.propTypes = {
    polId: React.PropTypes.string
};

PopupRepresentatives.defaultProps = {
};

export default PopupRepresentatives;
