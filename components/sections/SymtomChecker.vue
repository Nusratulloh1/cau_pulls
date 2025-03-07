<template>
    <div id="section1" class="h-screen welcome">
        <!-- Background Video -->
        <video muted class="video-bg" loop autoplay playsinline>
            <source src="@/assets/videos/4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        <div ref="checkerNav">
            <Navbar logo-type="blur" />
        </div>


        <div class="overlay" ref="checkerContainer">
            <div class="flex w-full items-center justify-between flex-col md:flex-row p-4 sm:px-12">
                <div class="left text-center md:text-start max-w-[396px]">
                    <h3 ref="checkerTitle" class=" text-[32px] left-[38.4px] md:text-5xl md:leading-[57.6px]">
                        Проверка симптомов с помощью ИИ
                    </h3>
                    <p ref="checkerText" class=" md:text-lg mt-2 md:mt-4 opacity-80">
                        Точный анализ симптомов на базе искусственного интеллекта с мгновенными рекомендациями для
                        вашего здоровья
                    </p>
                    <button ref="checkerBtn"
                        class=" bg-white rounded-[22px] font-bold text-[#39444C] sm:text-xl px-4 sm:px-9 py-3 sm:py-4 mt-6 sm:mt-10">
                        Связаться с нами
                    </button>
                </div>
                <div ref="checkerBoxes"
                    class="right text-center flex items-center md:block overflow-x-auto md:space-y-4 gap-4 absolute md:relative bottom-6 w-full md:w-auto px-5 md:px-0">
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <h5 class="text-[#62DCF2] font-semibold text-2xl md:text-[32px]">
                            163 000+
                        </h5>
                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            реальных кейсов
                        </p>
                    </div>
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <h5 class="text-[#62DCF2] font-semibold text-2xl md:text-[32px]">
                            3-4 минуты
                        </h5>
                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            Cессии Q&A
                        </p>
                    </div>
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <h5 class="text-[#62DCF2] font-semibold text-2xl md:text-[32px]">
                            355 кейсов
                        </h5>
                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            в одной болезни
                        </p>
                    </div>
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <svg class="mx-auto" width="35" height="36" viewBox="0 0 35 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 32.75H13.9375C9.30625 32.75 5.625 29.0688 5.625 24.4375V19.6875H8V24.4375C8 27.7625 10.6125 30.375 13.9375 30.375H17.5V32.75ZM31.75 35.125H34.3625L28.9 22.0625H26.2875L20.825 35.125H23.4375L24.3875 32.75H30.6812L31.75 35.125ZM25.4563 30.375L27.5938 25.15L29.7312 30.375H25.4563ZM31.75 17.3125H29.375V12.5625C29.375 9.2375 26.7625 6.625 23.4375 6.625H18.6875V4.25H23.4375C28.0688 4.25 31.75 7.93125 31.75 12.5625V17.3125ZM15.125 5.4375V3.0625H9.1875V0.6875H6.8125V3.0625H0.875V5.4375H10.6125C10.375 6.50625 9.6625 8.40625 8 10.1875C7.2875 9.35625 6.69375 8.525 6.3375 7.8125H3.60625C4.08125 9 4.9125 10.425 6.1 11.7312C5.15 12.5625 3.725 13.275 2.0625 13.8688L2.89375 16.125C5.03125 15.2937 6.69375 14.3438 8 13.3938C9.30625 14.4625 10.9688 15.4125 13.1062 16.125L13.9375 13.8688C12.275 13.275 10.85 12.4438 9.78125 11.7312C12.0375 9.35625 12.75 6.8625 12.9875 5.4375H15.125Z"
                                fill="#62DCF2" />
                        </svg>

                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            реальных кейсов
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <svg ref="svgRound" class=" mx-auto pl-10 w-[60vw] fade" viewBox="0 0 916 900" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="458" cy="4" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="17" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="31" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="45" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="61" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="77" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="93" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="109" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="125" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="142" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="159" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="176" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="194" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="212" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="230" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="249" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="268" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="286" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="304" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="322" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="339" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="356" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="373" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="389" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="403" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="416" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="428" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="440" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="454" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="469" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="485" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="502" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="520" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="539" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="559" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="580" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="604" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="628" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="654" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="680" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="708" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="736" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="762" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="786" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="810" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="832" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="854" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="876" r="2" fill="#D1CDCE" />
            <circle cx="458" cy="898" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="5" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="18" r="2" fill="#D1CDCE" />
            <circle cx="440" cy="32" r="2" fill="#D1CDCE" />
            <circle cx="440" cy="46" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="62" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="78" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="94" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="110" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="126" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="143" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="160" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="177" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="194" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="212" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="230" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="249" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="267" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="286" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="302" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="321" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="337" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="355" r="2" fill="#D1CDCE" />
            <circle cx="440" cy="372" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="389" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="403" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="416" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="428" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="440" r="2" fill="#D1CDCE" />
            <circle cx="441" cy="454" r="2" fill="#D1CDCE" />
            <circle cx="440" cy="470" r="2" fill="#D1CDCE" />
            <circle cx="440" cy="486" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="502" r="2" fill="#D1CDCE" />
            <circle cx="439" cy="521" r="2" fill="#D1CDCE" />
            <circle cx="438" cy="540" r="2" fill="#D1CDCE" />
            <circle cx="437" cy="559" r="2" fill="#D1CDCE" />
            <circle cx="436" cy="581" r="2" fill="#D1CDCE" />
            <circle cx="436" cy="605" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="628" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="654" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="680" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="708" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="736" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="762" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="786" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="810" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="832" r="2" fill="#D1CDCE" />
            <circle cx="435" cy="854" r="2" fill="#D1CDCE" />
            <circle cx="436" cy="876" r="2" fill="#D1CDCE" />
            <circle cx="436" cy="898" r="2" fill="#D1CDCE" />
            <circle cx="423" cy="7" r="2" fill="#D1CDCE" />
            <circle cx="423" cy="20" r="2" fill="#D1CDCE" />
            <circle cx="422" cy="34" r="2" fill="#D1CDCE" />
            <circle cx="422" cy="48" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="64" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="79" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="95" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="111" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="127" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="144" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="162" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="178" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="195" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="213" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="231" r="2" fill="#D1CDCE" />
            <circle cx="418" cy="250" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="268" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="287" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="303" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="322" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="338" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="356" r="2" fill="#D1CDCE" />
            <circle cx="423" cy="372" r="2" fill="#D1CDCE" />
            <circle cx="424" cy="389" r="2" fill="#D1CDCE" />
            <circle cx="424" cy="403" r="2" fill="#D1CDCE" />
            <circle cx="424" cy="416" r="2" fill="#D1CDCE" />
            <circle cx="424" cy="428" r="2" fill="#D1CDCE" />
            <circle cx="425" cy="441" r="2" fill="#D1CDCE" />
            <circle cx="424" cy="455" r="2" fill="#D1CDCE" />
            <circle cx="423" cy="471" r="2" fill="#D1CDCE" />
            <circle cx="422" cy="487" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="502" r="2" fill="#D1CDCE" />
            <circle cx="421" cy="522" r="2" fill="#D1CDCE" />
            <circle cx="420" cy="541" r="2" fill="#D1CDCE" />
            <circle cx="419" cy="560" r="2" fill="#D1CDCE" />
            <circle cx="417" cy="582" r="2" fill="#D1CDCE" />
            <circle cx="416" cy="606" r="2" fill="#D1CDCE" />
            <circle cx="415" cy="629" r="2" fill="#D1CDCE" />
            <circle cx="414" cy="655" r="2" fill="#D1CDCE" />
            <circle cx="414" cy="681" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="710" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="737" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="763" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="787" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="811" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="833" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="855" r="2" fill="#D1CDCE" />
            <circle cx="413" cy="877" r="2" fill="#D1CDCE" />
            <circle cx="414" cy="899" r="2" fill="#D1CDCE" />
            <circle cx="404" cy="10" r="2" fill="#D1CDCE" />
            <circle cx="403" cy="23" r="2" fill="#D1CDCE" />
            <circle cx="402" cy="37" r="2" fill="#D1CDCE" />
            <circle cx="402" cy="50" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="66" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="81" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="97" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="112" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="128" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="145" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="163" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="179" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="196" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="214" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="232" r="2" fill="#D1CDCE" />
            <circle cx="399" cy="251" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="269" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="288" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="304" r="2" fill="#D1CDCE" />
            <circle cx="402" cy="323" r="2" fill="#D1CDCE" />
            <circle cx="402" cy="339" r="2" fill="#D1CDCE" />
            <circle cx="403" cy="357" r="2" fill="#D1CDCE" />
            <circle cx="404" cy="373" r="2" fill="#D1CDCE" />
            <circle cx="405" cy="390" r="2" fill="#D1CDCE" />
            <circle cx="406" cy="404" r="2" fill="#D1CDCE" />
            <circle cx="407" cy="417" r="2" fill="#D1CDCE" />
            <circle cx="407" cy="429" r="2" fill="#D1CDCE" />
            <circle cx="407" cy="442" r="2" fill="#D1CDCE" />
            <circle cx="406" cy="457" r="2" fill="#D1CDCE" />
            <circle cx="404" cy="473" r="2" fill="#D1CDCE" />
            <circle cx="403" cy="489" r="2" fill="#D1CDCE" />
            <circle cx="402" cy="503" r="2" fill="#D1CDCE" />
            <circle cx="402" cy="523" r="2" fill="#D1CDCE" />
            <circle cx="401" cy="542" r="2" fill="#D1CDCE" />
            <circle cx="400" cy="562" r="2" fill="#D1CDCE" />
            <circle cx="399" cy="584" r="2" fill="#D1CDCE" />
            <circle cx="397" cy="607" r="2" fill="#D1CDCE" />
            <circle cx="396" cy="630" r="2" fill="#D1CDCE" />
            <circle cx="395" cy="656" r="2" fill="#D1CDCE" />
            <circle cx="394" cy="682" r="2" fill="#D1CDCE" />
            <circle cx="393" cy="711" r="2" fill="#D1CDCE" />
            <circle cx="393" cy="738" r="2" fill="#D1CDCE" />
            <circle cx="393" cy="764" r="2" fill="#D1CDCE" />
            <circle cx="393" cy="788" r="2" fill="#D1CDCE" />
            <circle cx="392" cy="812" r="2" fill="#D1CDCE" />
            <circle cx="392" cy="834" r="2" fill="#D1CDCE" />
            <circle cx="392" cy="856" r="2" fill="#D1CDCE" />
            <circle cx="392" cy="878" r="2" fill="#D1CDCE" />
            <circle cx="393" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="387" cy="1" r="2" fill="#D1CDCE" />
            <circle cx="385" cy="14" r="2" fill="#D1CDCE" />
            <circle cx="384" cy="27" r="2" fill="#D1CDCE" />
            <circle cx="383" cy="41" r="2" fill="#D1CDCE" />
            <circle cx="382" cy="54" r="2" fill="#D1CDCE" />
            <circle cx="382" cy="69" r="2" fill="#D1CDCE" />
            <circle cx="381" cy="84" r="2" fill="#D1CDCE" />
            <circle cx="381" cy="100" r="2" fill="#D1CDCE" />
            <circle cx="381" cy="116" r="2" fill="#D1CDCE" />
            <circle cx="381" cy="132" r="2" fill="#D1CDCE" />
            <circle cx="380" cy="148" r="2" fill="#D1CDCE" />
            <circle cx="380" cy="166" r="2" fill="#D1CDCE" />
            <circle cx="380" cy="183" r="2" fill="#D1CDCE" />
            <circle cx="379" cy="200" r="2" fill="#D1CDCE" />
            <circle cx="379" cy="217" r="2" fill="#D1CDCE" />
            <circle cx="379" cy="236" r="2" fill="#D1CDCE" />
            <circle cx="379" cy="253" r="2" fill="#D1CDCE" />
            <circle cx="379" cy="272" r="2" fill="#D1CDCE" />
            <circle cx="380" cy="289" r="2" fill="#D1CDCE" />
            <circle cx="381" cy="305" r="2" fill="#D1CDCE" />
            <circle cx="383" cy="323" r="2" fill="#D1CDCE" />
            <circle cx="384" cy="340" r="2" fill="#D1CDCE" />
            <circle cx="385" cy="357" r="2" fill="#D1CDCE" />
            <circle cx="385" cy="374" r="2" fill="#D1CDCE" />
            <circle cx="386" cy="388" r="2" fill="#D1CDCE" />
            <circle cx="386" cy="404" r="2" fill="#D1CDCE" />
            <circle cx="387" cy="418" r="2" fill="#D1CDCE" />
            <circle cx="388" cy="430" r="2" fill="#D1CDCE" />
            <circle cx="387" cy="445" r="2" fill="#D1CDCE" />
            <circle cx="386" cy="460" r="2" fill="#D1CDCE" />
            <circle cx="385" cy="474" r="2" fill="#D1CDCE" />
            <circle cx="384" cy="491" r="2" fill="#D1CDCE" />
            <circle cx="383" cy="507" r="2" fill="#D1CDCE" />
            <circle cx="383" cy="527" r="2" fill="#D1CDCE" />
            <circle cx="382" cy="546" r="2" fill="#D1CDCE" />
            <circle cx="381" cy="565" r="2" fill="#D1CDCE" />
            <circle cx="379" cy="587" r="2" fill="#D1CDCE" />
            <circle cx="377" cy="610" r="2" fill="#D1CDCE" />
            <circle cx="375" cy="634" r="2" fill="#D1CDCE" />
            <circle cx="374" cy="658" r="2" fill="#D1CDCE" />
            <circle cx="372" cy="685" r="2" fill="#D1CDCE" />
            <circle cx="372" cy="713" r="2" fill="#D1CDCE" />
            <circle cx="372" cy="740" r="2" fill="#D1CDCE" />
            <circle cx="372" cy="766" r="2" fill="#D1CDCE" />
            <circle cx="372" cy="791" r="2" fill="#D1CDCE" />
            <circle cx="372" cy="814" r="2" fill="#D1CDCE" />
            <circle cx="371" cy="837" r="2" fill="#D1CDCE" />
            <circle cx="370" cy="858" r="2" fill="#D1CDCE" />
            <circle cx="369" cy="881" r="2" fill="#D1CDCE" />
            <circle cx="369" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="371" cy="5" r="2" fill="#D1CDCE" />
            <circle cx="369" cy="18" r="2" fill="#D1CDCE" />
            <circle cx="367" cy="31" r="2" fill="#D1CDCE" />
            <circle cx="365" cy="45" r="2" fill="#D1CDCE" />
            <circle cx="364" cy="58" r="2" fill="#D1CDCE" />
            <circle cx="364" cy="73" r="2" fill="#D1CDCE" />
            <circle cx="363" cy="88" r="2" fill="#D1CDCE" />
            <circle cx="363" cy="104" r="2" fill="#D1CDCE" />
            <circle cx="363" cy="120" r="2" fill="#D1CDCE" />
            <circle cx="363" cy="136" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="152" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="170" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="187" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="204" r="2" fill="#D1CDCE" />
            <circle cx="361" cy="221" r="2" fill="#D1CDCE" />
            <circle cx="361" cy="240" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="257" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="276" r="2" fill="#D1CDCE" />
            <circle cx="363" cy="293" r="2" fill="#D1CDCE" />
            <circle cx="364" cy="309" r="2" fill="#D1CDCE" />
            <circle cx="366" cy="327" r="2" fill="#D1CDCE" />
            <circle cx="366" cy="343" r="2" fill="#D1CDCE" />
            <circle cx="368" cy="360" r="2" fill="#D1CDCE" />
            <circle cx="368" cy="377" r="2" fill="#D1CDCE" />
            <circle cx="369" cy="391" r="2" fill="#D1CDCE" />
            <circle cx="370" cy="407" r="2" fill="#D1CDCE" />
            <circle cx="371" cy="421" r="2" fill="#D1CDCE" />
            <circle cx="371" cy="434" r="2" fill="#D1CDCE" />
            <circle cx="369" cy="448" r="2" fill="#D1CDCE" />
            <circle cx="366" cy="463" r="2" fill="#D1CDCE" />
            <circle cx="365" cy="478" r="2" fill="#D1CDCE" />
            <circle cx="364" cy="495" r="2" fill="#D1CDCE" />
            <circle cx="363" cy="511" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="531" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="550" r="2" fill="#D1CDCE" />
            <circle cx="362" cy="569" r="2" fill="#D1CDCE" />
            <circle cx="360" cy="591" r="2" fill="#D1CDCE" />
            <circle cx="358" cy="614" r="2" fill="#D1CDCE" />
            <circle cx="357" cy="638" r="2" fill="#D1CDCE" />
            <circle cx="355" cy="662" r="2" fill="#D1CDCE" />
            <circle cx="354" cy="689" r="2" fill="#D1CDCE" />
            <circle cx="353" cy="716" r="2" fill="#D1CDCE" />
            <circle cx="352" cy="744" r="2" fill="#D1CDCE" />
            <circle cx="352" cy="770" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="795" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="818" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="841" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="862" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="885" r="2" fill="#D1CDCE" />
            <circle cx="359" cy="7" r="2" fill="#D1CDCE" />
            <circle cx="356" cy="20" r="2" fill="#D1CDCE" />
            <circle cx="353" cy="34" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="48" r="2" fill="#D1CDCE" />
            <circle cx="350" cy="61" r="2" fill="#D1CDCE" />
            <circle cx="350" cy="76" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="91" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="107" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="123" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="139" r="2" fill="#D1CDCE" />
            <circle cx="348" cy="155" r="2" fill="#D1CDCE" />
            <circle cx="348" cy="173" r="2" fill="#D1CDCE" />
            <circle cx="348" cy="190" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="207" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="225" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="243" r="2" fill="#D1CDCE" />
            <circle cx="350" cy="260" r="2" fill="#D1CDCE" />
            <circle cx="350" cy="279" r="2" fill="#D1CDCE" />
            <circle cx="350" cy="296" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="312" r="2" fill="#D1CDCE" />
            <circle cx="353" cy="330" r="2" fill="#D1CDCE" />
            <circle cx="354" cy="346" r="2" fill="#D1CDCE" />
            <circle cx="355" cy="363" r="2" fill="#D1CDCE" />
            <circle cx="355" cy="380" r="2" fill="#D1CDCE" />
            <circle cx="356" cy="394" r="2" fill="#D1CDCE" />
            <circle cx="358" cy="410" r="2" fill="#D1CDCE" />
            <circle cx="359" cy="424" r="2" fill="#D1CDCE" />
            <circle cx="359" cy="437" r="2" fill="#D1CDCE" />
            <circle cx="356" cy="451" r="2" fill="#D1CDCE" />
            <circle cx="353" cy="466" r="2" fill="#D1CDCE" />
            <circle cx="351" cy="481" r="2" fill="#D1CDCE" />
            <circle cx="349" cy="497" r="2" fill="#D1CDCE" />
            <circle cx="346" cy="514" r="2" fill="#D1CDCE" />
            <circle cx="345" cy="534" r="2" fill="#D1CDCE" />
            <circle cx="345" cy="553" r="2" fill="#D1CDCE" />
            <circle cx="345" cy="572" r="2" fill="#D1CDCE" />
            <circle cx="343" cy="594" r="2" fill="#D1CDCE" />
            <circle cx="343" cy="617" r="2" fill="#D1CDCE" />
            <circle cx="342" cy="641" r="2" fill="#D1CDCE" />
            <circle cx="340" cy="665" r="2" fill="#D1CDCE" />
            <circle cx="339" cy="692" r="2" fill="#D1CDCE" />
            <circle cx="338" cy="719" r="2" fill="#D1CDCE" />
            <circle cx="337" cy="747" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="773" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="798" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="821" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="844" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="865" r="2" fill="#D1CDCE" />
            <circle cx="334" cy="888" r="2" fill="#D1CDCE" />
            <circle cx="344" cy="12" r="2" fill="#D1CDCE" />
            <circle cx="341" cy="25" r="2" fill="#D1CDCE" />
            <circle cx="339" cy="39" r="2" fill="#D1CDCE" />
            <circle cx="337" cy="53" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="66" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="81" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="96" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="112" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="128" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="144" r="2" fill="#D1CDCE" />
            <circle cx="334" cy="160" r="2" fill="#D1CDCE" />
            <circle cx="334" cy="178" r="2" fill="#D1CDCE" />
            <circle cx="334" cy="195" r="2" fill="#D1CDCE" />
            <circle cx="335" cy="212" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="230" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="247" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="263" r="2" fill="#D1CDCE" />
            <circle cx="337" cy="282" r="2" fill="#D1CDCE" />
            <circle cx="337" cy="299" r="2" fill="#D1CDCE" />
            <circle cx="338" cy="316" r="2" fill="#D1CDCE" />
            <circle cx="339" cy="334" r="2" fill="#D1CDCE" />
            <circle cx="340" cy="350" r="2" fill="#D1CDCE" />
            <circle cx="343" cy="363" r="2" fill="#D1CDCE" />
            <circle cx="342" cy="397" r="2" fill="#D1CDCE" />
            <circle cx="344" cy="410" r="2" fill="#D1CDCE" />
            <circle cx="344" cy="424" r="2" fill="#D1CDCE" />
            <circle cx="344" cy="438" r="2" fill="#D1CDCE" />
            <circle cx="339" cy="468" r="2" fill="#D1CDCE" />
            <circle cx="336" cy="480" r="2" fill="#D1CDCE" />
            <circle cx="332" cy="498" r="2" fill="#D1CDCE" />
            <circle cx="330" cy="515" r="2" fill="#D1CDCE" />
            <circle cx="329" cy="535" r="2" fill="#D1CDCE" />
            <circle cx="328" cy="554" r="2" fill="#D1CDCE" />
            <circle cx="328" cy="573" r="2" fill="#D1CDCE" />
            <circle cx="326" cy="596" r="2" fill="#D1CDCE" />
            <circle cx="325" cy="618" r="2" fill="#D1CDCE" />
            <circle cx="324" cy="642" r="2" fill="#D1CDCE" />
            <circle cx="323" cy="666" r="2" fill="#D1CDCE" />
            <circle cx="321" cy="693" r="2" fill="#D1CDCE" />
            <circle cx="319" cy="720" r="2" fill="#D1CDCE" />
            <circle cx="317" cy="749" r="2" fill="#D1CDCE" />
            <circle cx="317" cy="775" r="2" fill="#D1CDCE" />
            <circle cx="316" cy="799" r="2" fill="#D1CDCE" />
            <circle cx="315" cy="822" r="2" fill="#D1CDCE" />
            <circle cx="315" cy="845" r="2" fill="#D1CDCE" />
            <circle cx="315" cy="866" r="2" fill="#D1CDCE" />
            <circle cx="314" cy="887" r="2" fill="#D1CDCE" />
            <circle cx="341" cy="453" r="2" fill="#D1CDCE" />
            <circle cx="330" cy="16" r="2" fill="#D1CDCE" />
            <circle cx="327" cy="29" r="2" fill="#D1CDCE" />
            <circle cx="325" cy="43" r="2" fill="#D1CDCE" />
            <circle cx="323" cy="57" r="2" fill="#D1CDCE" />
            <circle cx="322" cy="70" r="2" fill="#D1CDCE" />
            <circle cx="322" cy="85" r="2" fill="#D1CDCE" />
            <circle cx="321" cy="100" r="2" fill="#D1CDCE" />
            <circle cx="321" cy="116" r="2" fill="#D1CDCE" />
            <circle cx="321" cy="132" r="2" fill="#D1CDCE" />
            <circle cx="321" cy="148" r="2" fill="#D1CDCE" />
            <circle cx="320" cy="164" r="2" fill="#D1CDCE" />
            <circle cx="320" cy="182" r="2" fill="#D1CDCE" />
            <circle cx="320" cy="199" r="2" fill="#D1CDCE" />
            <circle cx="321" cy="216" r="2" fill="#D1CDCE" />
            <circle cx="322" cy="234" r="2" fill="#D1CDCE" />
            <circle cx="322" cy="251" r="2" fill="#D1CDCE" />
            <circle cx="322" cy="267" r="2" fill="#D1CDCE" />
            <circle cx="323" cy="286" r="2" fill="#D1CDCE" />
            <circle cx="323" cy="303" r="2" fill="#D1CDCE" />
            <circle cx="324" cy="320" r="2" fill="#D1CDCE" />
            <circle cx="325" cy="338" r="2" fill="#D1CDCE" />
            <circle cx="326" cy="354" r="2" fill="#D1CDCE" />
            <circle cx="329" cy="367" r="2" fill="#D1CDCE" />
            <circle cx="328" cy="401" r="2" fill="#D1CDCE" />
            <circle cx="330" cy="414" r="2" fill="#D1CDCE" />
            <circle cx="330" cy="428" r="2" fill="#D1CDCE" />
            <circle cx="324" cy="471" r="2" fill="#D1CDCE" />
            <circle cx="320" cy="486" r="2" fill="#D1CDCE" />
            <circle cx="316" cy="502" r="2" fill="#D1CDCE" />
            <circle cx="314" cy="518" r="2" fill="#D1CDCE" />
            <circle cx="311" cy="536" r="2" fill="#D1CDCE" />
            <circle cx="309" cy="558" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="577" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="598" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="622" r="2" fill="#D1CDCE" />
            <circle cx="305" cy="646" r="2" fill="#D1CDCE" />
            <circle cx="303" cy="671" r="2" fill="#D1CDCE" />
            <circle cx="301" cy="695" r="2" fill="#D1CDCE" />
            <circle cx="300" cy="722" r="2" fill="#D1CDCE" />
            <circle cx="299" cy="752" r="2" fill="#D1CDCE" />
            <circle cx="297" cy="780" r="2" fill="#D1CDCE" />
            <circle cx="296" cy="804" r="2" fill="#D1CDCE" />
            <circle cx="295" cy="828" r="2" fill="#D1CDCE" />
            <circle cx="295" cy="850" r="2" fill="#D1CDCE" />
            <circle cx="295" cy="869" r="2" fill="#D1CDCE" />
            <circle cx="294" cy="892" r="2" fill="#D1CDCE" />
            <circle cx="327" cy="457" r="2" fill="#D1CDCE" />
            <circle cx="329" cy="443" r="2" fill="#D1CDCE" />
            <circle cx="343" cy="381" r="2" fill="#D1CDCE" />
            <circle cx="316" cy="22" r="2" fill="#D1CDCE" />
            <circle cx="313" cy="35" r="2" fill="#D1CDCE" />
            <circle cx="311" cy="49" r="2" fill="#D1CDCE" />
            <circle cx="309" cy="63" r="2" fill="#D1CDCE" />
            <circle cx="308" cy="76" r="2" fill="#D1CDCE" />
            <circle cx="308" cy="91" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="106" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="122" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="138" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="154" r="2" fill="#D1CDCE" />
            <circle cx="306" cy="170" r="2" fill="#D1CDCE" />
            <circle cx="306" cy="188" r="2" fill="#D1CDCE" />
            <circle cx="306" cy="205" r="2" fill="#D1CDCE" />
            <circle cx="307" cy="222" r="2" fill="#D1CDCE" />
            <circle cx="308" cy="240" r="2" fill="#D1CDCE" />
            <circle cx="308" cy="257" r="2" fill="#D1CDCE" />
            <circle cx="308" cy="273" r="2" fill="#D1CDCE" />
            <circle cx="316" cy="434" r="2" fill="#D1CDCE" />
            <circle cx="312" cy="449" r="2" fill="#D1CDCE" />
            <circle cx="302" cy="491" r="2" fill="#D1CDCE" />
            <circle cx="299" cy="509" r="2" fill="#D1CDCE" />
            <circle cx="295" cy="525" r="2" fill="#D1CDCE" />
            <circle cx="292" cy="543" r="2" fill="#D1CDCE" />
            <circle cx="289" cy="564" r="2" fill="#D1CDCE" />
            <circle cx="288" cy="584" r="2" fill="#D1CDCE" />
            <circle cx="287" cy="603" r="2" fill="#D1CDCE" />
            <circle cx="286" cy="627" r="2" fill="#D1CDCE" />
            <circle cx="285" cy="651" r="2" fill="#D1CDCE" />
            <circle cx="282" cy="676" r="2" fill="#D1CDCE" />
            <circle cx="280" cy="703" r="2" fill="#D1CDCE" />
            <circle cx="279" cy="730" r="2" fill="#D1CDCE" />
            <circle cx="277" cy="759" r="2" fill="#D1CDCE" />
            <circle cx="276" cy="785" r="2" fill="#D1CDCE" />
            <circle cx="275" cy="810" r="2" fill="#D1CDCE" />
            <circle cx="274" cy="834" r="2" fill="#D1CDCE" />
            <circle cx="274" cy="856" r="2" fill="#D1CDCE" />
            <circle cx="274" cy="879" r="2" fill="#D1CDCE" />
            <circle cx="273" cy="898" r="2" fill="#D1CDCE" />
            <circle cx="308" cy="463" r="2" fill="#D1CDCE" />
            <circle cx="306" cy="476" r="2" fill="#D1CDCE" />
            <circle cx="299" cy="24" r="2" fill="#D1CDCE" />
            <circle cx="296" cy="37" r="2" fill="#D1CDCE" />
            <circle cx="294" cy="51" r="2" fill="#D1CDCE" />
            <circle cx="292" cy="65" r="2" fill="#D1CDCE" />
            <circle cx="291" cy="78" r="2" fill="#D1CDCE" />
            <circle cx="291" cy="93" r="2" fill="#D1CDCE" />
            <circle cx="290" cy="108" r="2" fill="#D1CDCE" />
            <circle cx="290" cy="124" r="2" fill="#D1CDCE" />
            <circle cx="290" cy="140" r="2" fill="#D1CDCE" />
            <circle cx="290" cy="156" r="2" fill="#D1CDCE" />
            <circle cx="289" cy="172" r="2" fill="#D1CDCE" />
            <circle cx="289" cy="190" r="2" fill="#D1CDCE" />
            <circle cx="289" cy="207" r="2" fill="#D1CDCE" />
            <circle cx="290" cy="224" r="2" fill="#D1CDCE" />
            <circle cx="291" cy="242" r="2" fill="#D1CDCE" />
            <circle cx="291" cy="259" r="2" fill="#D1CDCE" />
            <circle cx="291" cy="275" r="2" fill="#D1CDCE" />
            <circle cx="299" cy="436" r="2" fill="#D1CDCE" />
            <circle cx="295" cy="451" r="2" fill="#D1CDCE" />
            <circle cx="284" cy="494" r="2" fill="#D1CDCE" />
            <circle cx="280" cy="511" r="2" fill="#D1CDCE" />
            <circle cx="276" cy="527" r="2" fill="#D1CDCE" />
            <circle cx="273" cy="545" r="2" fill="#D1CDCE" />
            <circle cx="271" cy="567" r="2" fill="#D1CDCE" />
            <circle cx="270" cy="587" r="2" fill="#D1CDCE" />
            <circle cx="269" cy="605" r="2" fill="#D1CDCE" />
            <circle cx="268" cy="629" r="2" fill="#D1CDCE" />
            <circle cx="267" cy="653" r="2" fill="#D1CDCE" />
            <circle cx="264" cy="678" r="2" fill="#D1CDCE" />
            <circle cx="262" cy="705" r="2" fill="#D1CDCE" />
            <circle cx="260" cy="732" r="2" fill="#D1CDCE" />
            <circle cx="258" cy="761" r="2" fill="#D1CDCE" />
            <circle cx="257" cy="787" r="2" fill="#D1CDCE" />
            <circle cx="255" cy="812" r="2" fill="#D1CDCE" />
            <circle cx="253" cy="837" r="2" fill="#D1CDCE" />
            <circle cx="253" cy="859" r="2" fill="#D1CDCE" />
            <circle cx="253" cy="881" r="2" fill="#D1CDCE" />
            <circle cx="251" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="291" cy="465" r="2" fill="#D1CDCE" />
            <circle cx="289" cy="478" r="2" fill="#D1CDCE" />
            <circle cx="272" cy="453" r="2" fill="#D1CDCE" />
            <circle cx="262" cy="496" r="2" fill="#D1CDCE" />
            <circle cx="259" cy="511" r="2" fill="#D1CDCE" />
            <circle cx="255" cy="528" r="2" fill="#D1CDCE" />
            <circle cx="252" cy="546" r="2" fill="#D1CDCE" />
            <circle cx="249" cy="568" r="2" fill="#D1CDCE" />
            <circle cx="246" cy="589" r="2" fill="#D1CDCE" />
            <circle cx="244" cy="609" r="2" fill="#D1CDCE" />
            <circle cx="243" cy="632" r="2" fill="#D1CDCE" />
            <circle cx="241" cy="653" r="2" fill="#D1CDCE" />
            <circle cx="240" cy="679" r="2" fill="#D1CDCE" />
            <circle cx="238" cy="705" r="2" fill="#D1CDCE" />
            <circle cx="238" cy="732" r="2" fill="#D1CDCE" />
            <circle cx="236" cy="762" r="2" fill="#D1CDCE" />
            <circle cx="235" cy="788" r="2" fill="#D1CDCE" />
            <circle cx="233" cy="814" r="2" fill="#D1CDCE" />
            <circle cx="231" cy="839" r="2" fill="#D1CDCE" />
            <circle cx="230" cy="861" r="2" fill="#D1CDCE" />
            <circle cx="229" cy="881" r="2" fill="#D1CDCE" />
            <circle cx="228" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="269" cy="468" r="2" fill="#D1CDCE" />
            <circle cx="266" cy="481" r="2" fill="#D1CDCE" />
            <circle cx="252" cy="452" r="2" fill="#D1CDCE" />
            <circle cx="242" cy="495" r="2" fill="#D1CDCE" />
            <circle cx="239" cy="510" r="2" fill="#D1CDCE" />
            <circle cx="235" cy="527" r="2" fill="#D1CDCE" />
            <circle cx="232" cy="545" r="2" fill="#D1CDCE" />
            <circle cx="229" cy="567" r="2" fill="#D1CDCE" />
            <circle cx="226" cy="588" r="2" fill="#D1CDCE" />
            <circle cx="224" cy="608" r="2" fill="#D1CDCE" />
            <circle cx="223" cy="631" r="2" fill="#D1CDCE" />
            <circle cx="221" cy="652" r="2" fill="#D1CDCE" />
            <circle cx="220" cy="678" r="2" fill="#D1CDCE" />
            <circle cx="218" cy="704" r="2" fill="#D1CDCE" />
            <circle cx="217" cy="731" r="2" fill="#D1CDCE" />
            <circle cx="215" cy="761" r="2" fill="#D1CDCE" />
            <circle cx="214" cy="787" r="2" fill="#D1CDCE" />
            <circle cx="212" cy="813" r="2" fill="#D1CDCE" />
            <circle cx="211" cy="838" r="2" fill="#D1CDCE" />
            <circle cx="210" cy="860" r="2" fill="#D1CDCE" />
            <circle cx="209" cy="880" r="2" fill="#D1CDCE" />
            <circle cx="208" cy="899" r="2" fill="#D1CDCE" />
            <circle cx="249" cy="467" r="2" fill="#D1CDCE" />
            <circle cx="246" cy="480" r="2" fill="#D1CDCE" />
            <circle cx="235" cy="453" r="2" fill="#D1CDCE" />
            <circle cx="225" cy="496" r="2" fill="#D1CDCE" />
            <circle cx="222" cy="511" r="2" fill="#D1CDCE" />
            <circle cx="218" cy="528" r="2" fill="#D1CDCE" />
            <circle cx="215" cy="546" r="2" fill="#D1CDCE" />
            <circle cx="212" cy="568" r="2" fill="#D1CDCE" />
            <circle cx="209" cy="589" r="2" fill="#D1CDCE" />
            <circle cx="207" cy="609" r="2" fill="#D1CDCE" />
            <circle cx="206" cy="632" r="2" fill="#D1CDCE" />
            <circle cx="204" cy="653" r="2" fill="#D1CDCE" />
            <circle cx="203" cy="679" r="2" fill="#D1CDCE" />
            <circle cx="201" cy="705" r="2" fill="#D1CDCE" />
            <circle cx="200" cy="732" r="2" fill="#D1CDCE" />
            <circle cx="198" cy="762" r="2" fill="#D1CDCE" />
            <circle cx="197" cy="788" r="2" fill="#D1CDCE" />
            <circle cx="195" cy="814" r="2" fill="#D1CDCE" />
            <circle cx="194" cy="839" r="2" fill="#D1CDCE" />
            <circle cx="193" cy="861" r="2" fill="#D1CDCE" />
            <circle cx="192" cy="881" r="2" fill="#D1CDCE" />
            <circle cx="191" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="232" cy="468" r="2" fill="#D1CDCE" />
            <circle cx="229" cy="481" r="2" fill="#D1CDCE" />
            <circle cx="220" cy="454" r="2" fill="#D1CDCE" />
            <circle cx="210" cy="497" r="2" fill="#D1CDCE" />
            <circle cx="207" cy="512" r="2" fill="#D1CDCE" />
            <circle cx="203" cy="529" r="2" fill="#D1CDCE" />
            <circle cx="200" cy="547" r="2" fill="#D1CDCE" />
            <circle cx="197" cy="569" r="2" fill="#D1CDCE" />
            <circle cx="194" cy="590" r="2" fill="#D1CDCE" />
            <circle cx="192" cy="610" r="2" fill="#D1CDCE" />
            <circle cx="191" cy="633" r="2" fill="#D1CDCE" />
            <circle cx="189" cy="654" r="2" fill="#D1CDCE" />
            <circle cx="188" cy="680" r="2" fill="#D1CDCE" />
            <circle cx="186" cy="706" r="2" fill="#D1CDCE" />
            <circle cx="185" cy="733" r="2" fill="#D1CDCE" />
            <circle cx="183" cy="763" r="2" fill="#D1CDCE" />
            <circle cx="182" cy="789" r="2" fill="#D1CDCE" />
            <circle cx="180" cy="815" r="2" fill="#D1CDCE" />
            <circle cx="179" cy="840" r="2" fill="#D1CDCE" />
            <circle cx="178" cy="862" r="2" fill="#D1CDCE" />
            <circle cx="177" cy="882" r="2" fill="#D1CDCE" />
            <circle cx="176" cy="901" r="2" fill="#D1CDCE" />
            <circle cx="217" cy="469" r="2" fill="#D1CDCE" />
            <circle cx="214" cy="482" r="2" fill="#D1CDCE" />
            <circle cx="205" cy="455" r="2" fill="#D1CDCE" />
            <circle cx="195" cy="498" r="2" fill="#D1CDCE" />
            <circle cx="192" cy="513" r="2" fill="#D1CDCE" />
            <circle cx="188" cy="530" r="2" fill="#D1CDCE" />
            <circle cx="185" cy="548" r="2" fill="#D1CDCE" />
            <circle cx="182" cy="570" r="2" fill="#D1CDCE" />
            <circle cx="179" cy="591" r="2" fill="#D1CDCE" />
            <circle cx="177" cy="611" r="2" fill="#D1CDCE" />
            <circle cx="176" cy="634" r="2" fill="#D1CDCE" />
            <circle cx="174" cy="655" r="2" fill="#D1CDCE" />
            <circle cx="173" cy="681" r="2" fill="#D1CDCE" />
            <circle cx="171" cy="707" r="2" fill="#D1CDCE" />
            <circle cx="170" cy="734" r="2" fill="#D1CDCE" />
            <circle cx="168" cy="764" r="2" fill="#D1CDCE" />
            <circle cx="167" cy="790" r="2" fill="#D1CDCE" />
            <circle cx="165" cy="816" r="2" fill="#D1CDCE" />
            <circle cx="164" cy="841" r="2" fill="#D1CDCE" />
            <circle cx="163" cy="863" r="2" fill="#D1CDCE" />
            <circle cx="162" cy="883" r="2" fill="#D1CDCE" />
            <circle cx="202" cy="470" r="2" fill="#D1CDCE" />
            <circle cx="199" cy="484" r="2" fill="#D1CDCE" />
            <circle cx="186" cy="484" r="2" fill="#D1CDCE" />
            <circle cx="181" cy="498" r="2" fill="#D1CDCE" />
            <circle cx="178" cy="513" r="2" fill="#D1CDCE" />
            <circle cx="173" cy="530" r="2" fill="#D1CDCE" />
            <circle cx="170" cy="548" r="2" fill="#D1CDCE" />
            <circle cx="167" cy="572" r="2" fill="#D1CDCE" />
            <circle cx="164" cy="592" r="2" fill="#D1CDCE" />
            <circle cx="163" cy="608" r="2" fill="#D1CDCE" />
            <circle cx="162" cy="631" r="2" fill="#D1CDCE" />
            <circle cx="160" cy="652" r="2" fill="#D1CDCE" />
            <circle cx="159" cy="678" r="2" fill="#D1CDCE" />
            <circle cx="157" cy="704" r="2" fill="#D1CDCE" />
            <circle cx="156" cy="731" r="2" fill="#D1CDCE" />
            <circle cx="154" cy="761" r="2" fill="#D1CDCE" />
            <circle cx="153" cy="787" r="2" fill="#D1CDCE" />
            <circle cx="151" cy="813" r="2" fill="#D1CDCE" />
            <circle cx="150" cy="838" r="2" fill="#D1CDCE" />
            <circle cx="149" cy="860" r="2" fill="#D1CDCE" />
            <circle cx="148" cy="880" r="2" fill="#D1CDCE" />
            <circle cx="147" cy="899" r="2" fill="#D1CDCE" />
            <circle cx="188" cy="467" r="2" fill="#D1CDCE" />
            <circle cx="185" cy="480" r="2" fill="#D1CDCE" />
            <circle cx="168" cy="499" r="2" fill="#D1CDCE" />
            <circle cx="164" cy="513" r="2" fill="#D1CDCE" />
            <circle cx="159" cy="530" r="2" fill="#D1CDCE" />
            <circle cx="157" cy="549" r="2" fill="#D1CDCE" />
            <circle cx="154" cy="571" r="2" fill="#D1CDCE" />
            <circle cx="152" cy="589" r="2" fill="#D1CDCE" />
            <circle cx="151" cy="605" r="2" fill="#D1CDCE" />
            <circle cx="150" cy="628" r="2" fill="#D1CDCE" />
            <circle cx="148" cy="649" r="2" fill="#D1CDCE" />
            <circle cx="147" cy="675" r="2" fill="#D1CDCE" />
            <circle cx="145" cy="701" r="2" fill="#D1CDCE" />
            <circle cx="144" cy="728" r="2" fill="#D1CDCE" />
            <circle cx="142" cy="758" r="2" fill="#D1CDCE" />
            <circle cx="141" cy="784" r="2" fill="#D1CDCE" />
            <circle cx="139" cy="810" r="2" fill="#D1CDCE" />
            <circle cx="138" cy="835" r="2" fill="#D1CDCE" />
            <circle cx="137" cy="857" r="2" fill="#D1CDCE" />
            <circle cx="136" cy="877" r="2" fill="#D1CDCE" />
            <circle cx="135" cy="896" r="2" fill="#D1CDCE" />
            <circle cx="176" cy="464" r="2" fill="#D1CDCE" />
            <circle cx="173" cy="477" r="2" fill="#D1CDCE" />
            <circle cx="152" cy="498" r="2" fill="#D1CDCE" />
            <circle cx="148" cy="514" r="2" fill="#D1CDCE" />
            <circle cx="143" cy="530" r="2" fill="#D1CDCE" />
            <circle cx="140" cy="549" r="2" fill="#D1CDCE" />
            <circle cx="138" cy="569" r="2" fill="#D1CDCE" />
            <circle cx="136" cy="587" r="2" fill="#D1CDCE" />
            <circle cx="135" cy="604" r="2" fill="#D1CDCE" />
            <circle cx="134" cy="625" r="2" fill="#D1CDCE" />
            <circle cx="132" cy="646" r="2" fill="#D1CDCE" />
            <circle cx="131" cy="672" r="2" fill="#D1CDCE" />
            <circle cx="129" cy="698" r="2" fill="#D1CDCE" />
            <circle cx="128" cy="725" r="2" fill="#D1CDCE" />
            <circle cx="126" cy="755" r="2" fill="#D1CDCE" />
            <circle cx="125" cy="781" r="2" fill="#D1CDCE" />
            <circle cx="123" cy="807" r="2" fill="#D1CDCE" />
            <circle cx="122" cy="832" r="2" fill="#D1CDCE" />
            <circle cx="121" cy="854" r="2" fill="#D1CDCE" />
            <circle cx="120" cy="874" r="2" fill="#D1CDCE" />
            <circle cx="119" cy="893" r="2" fill="#D1CDCE" />
            <circle cx="160" cy="461" r="2" fill="#D1CDCE" />
            <circle cx="157" cy="474" r="2" fill="#D1CDCE" />
            <circle cx="131" cy="514" r="2" fill="#D1CDCE" />
            <circle cx="126" cy="530" r="2" fill="#D1CDCE" />
            <circle cx="123" cy="549" r="2" fill="#D1CDCE" />
            <circle cx="121" cy="569" r="2" fill="#D1CDCE" />
            <circle cx="119" cy="587" r="2" fill="#D1CDCE" />
            <circle cx="118" cy="604" r="2" fill="#D1CDCE" />
            <circle cx="117" cy="625" r="2" fill="#D1CDCE" />
            <circle cx="115" cy="646" r="2" fill="#D1CDCE" />
            <circle cx="114" cy="672" r="2" fill="#D1CDCE" />
            <circle cx="112" cy="698" r="2" fill="#D1CDCE" />
            <circle cx="111" cy="725" r="2" fill="#D1CDCE" />
            <circle cx="109" cy="755" r="2" fill="#D1CDCE" />
            <circle cx="108" cy="781" r="2" fill="#D1CDCE" />
            <circle cx="106" cy="807" r="2" fill="#D1CDCE" />
            <circle cx="105" cy="832" r="2" fill="#D1CDCE" />
            <circle cx="104" cy="854" r="2" fill="#D1CDCE" />
            <circle cx="103" cy="874" r="2" fill="#D1CDCE" />
            <circle cx="102" cy="893" r="2" fill="#D1CDCE" />
            <circle cx="143" cy="461" r="2" fill="#D1CDCE" />
            <circle cx="140" cy="474" r="2" fill="#D1CDCE" />
            <circle cx="106" cy="549" r="2" fill="#D1CDCE" />
            <circle cx="104" cy="569" r="2" fill="#D1CDCE" />
            <circle cx="102" cy="587" r="2" fill="#D1CDCE" />
            <circle cx="101" cy="604" r="2" fill="#D1CDCE" />
            <circle cx="100" cy="625" r="2" fill="#D1CDCE" />
            <circle cx="98" cy="646" r="2" fill="#D1CDCE" />
            <circle cx="97" cy="672" r="2" fill="#D1CDCE" />
            <circle cx="95" cy="698" r="2" fill="#D1CDCE" />
            <circle cx="94" cy="725" r="2" fill="#D1CDCE" />
            <circle cx="92" cy="755" r="2" fill="#D1CDCE" />
            <circle cx="91" cy="781" r="2" fill="#D1CDCE" />
            <circle cx="89" cy="807" r="2" fill="#D1CDCE" />
            <circle cx="88" cy="832" r="2" fill="#D1CDCE" />
            <circle cx="87" cy="854" r="2" fill="#D1CDCE" />
            <circle cx="86" cy="874" r="2" fill="#D1CDCE" />
            <circle cx="85" cy="893" r="2" fill="#D1CDCE" />
            <circle cx="126" cy="461" r="2" fill="#D1CDCE" />
            <circle cx="123" cy="474" r="2" fill="#D1CDCE" />
            <circle cx="79" cy="647" r="2" fill="#D1CDCE" />
            <circle cx="78" cy="673" r="2" fill="#D1CDCE" />
            <circle cx="76" cy="699" r="2" fill="#D1CDCE" />
            <circle cx="75" cy="726" r="2" fill="#D1CDCE" />
            <circle cx="73" cy="756" r="2" fill="#D1CDCE" />
            <circle cx="72" cy="782" r="2" fill="#D1CDCE" />
            <circle cx="70" cy="808" r="2" fill="#D1CDCE" />
            <circle cx="69" cy="833" r="2" fill="#D1CDCE" />
            <circle cx="68" cy="855" r="2" fill="#D1CDCE" />
            <circle cx="67" cy="875" r="2" fill="#D1CDCE" />
            <circle cx="66" cy="894" r="2" fill="#D1CDCE" />
            <circle cx="63" cy="677" r="2" fill="#D1CDCE" />
            <circle cx="61" cy="703" r="2" fill="#D1CDCE" />
            <circle cx="60" cy="730" r="2" fill="#D1CDCE" />
            <circle cx="58" cy="760" r="2" fill="#D1CDCE" />
            <circle cx="57" cy="786" r="2" fill="#D1CDCE" />
            <circle cx="55" cy="812" r="2" fill="#D1CDCE" />
            <circle cx="54" cy="837" r="2" fill="#D1CDCE" />
            <circle cx="53" cy="859" r="2" fill="#D1CDCE" />
            <circle cx="52" cy="879" r="2" fill="#D1CDCE" />
            <circle cx="51" cy="898" r="2" fill="#D1CDCE" />
            <circle cx="48" cy="710" r="2" fill="#D1CDCE" />
            <circle cx="47" cy="737" r="2" fill="#D1CDCE" />
            <circle cx="45" cy="767" r="2" fill="#D1CDCE" />
            <circle cx="44" cy="793" r="2" fill="#D1CDCE" />
            <circle cx="42" cy="819" r="2" fill="#D1CDCE" />
            <circle cx="41" cy="844" r="2" fill="#D1CDCE" />
            <circle cx="40" cy="866" r="2" fill="#D1CDCE" />
            <circle cx="39" cy="886" r="2" fill="#D1CDCE" />
            <circle cx="35" cy="744" r="2" fill="#D1CDCE" />
            <circle cx="33" cy="774" r="2" fill="#D1CDCE" />
            <circle cx="32" cy="800" r="2" fill="#D1CDCE" />
            <circle cx="30" cy="826" r="2" fill="#D1CDCE" />
            <circle cx="29" cy="851" r="2" fill="#D1CDCE" />
            <circle cx="28" cy="873" r="2" fill="#D1CDCE" />
            <circle cx="27" cy="893" r="2" fill="#D1CDCE" />
            <circle cx="22" cy="807" r="2" fill="#D1CDCE" />
            <circle cx="20" cy="833" r="2" fill="#D1CDCE" />
            <circle cx="19" cy="858" r="2" fill="#D1CDCE" />
            <circle cx="18" cy="880" r="2" fill="#D1CDCE" />
            <circle cx="17" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="6" cy="858" r="2" fill="#D1CDCE" />
            <circle cx="5" cy="880" r="2" fill="#D1CDCE" />
            <circle cx="4" cy="900" r="2" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 3)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 16)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 478 30)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 478 44)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 60)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 76)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 92)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 108)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 124)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 141)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 158)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 175)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 192)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 210)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 228)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 247)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 265)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 284)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 300)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 319)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 335)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 353)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 478 370)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 387)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 401)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 414)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 426)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 438)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 477 452)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 478 468)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 478 484)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 500)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 479 519)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 480 538)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 481 557)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 482 579)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 482 603)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 626)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 652)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 678)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 706)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 734)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 760)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 784)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 808)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 830)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 483 852)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 482 874)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 482 896)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 495 5)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 495 18)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 496 32)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 496 46)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 62)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 77)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 93)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 109)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 125)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 142)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 160)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 176)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 193)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 211)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 229)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 500 248)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 266)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 285)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 301)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 320)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 336)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 354)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 495 370)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 494 387)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 494 401)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 494 414)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 494 426)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 493 439)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 494 453)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 495 469)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 496 485)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 500)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 497 520)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 498 539)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 499 558)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 501 580)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 502 604)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 503 627)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 504 653)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 504 679)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 708)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 735)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 761)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 785)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 809)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 831)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 853)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 505 875)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 504 897)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 514 8)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 515 21)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 516 35)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 516 48)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 64)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 79)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 95)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 110)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 126)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 143)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 161)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 177)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 194)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 212)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 230)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 519 249)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 267)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 286)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 302)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 516 321)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 516 337)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 515 355)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 514 371)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 513 388)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 512 402)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 511 415)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 511 427)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 511 440)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 512 455)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 514 471)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 515 487)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 516 501)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 516 521)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 517 540)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 518 560)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 519 582)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 521 605)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 522 628)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 523 654)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 524 680)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 525 709)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 525 736)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 525 762)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 525 786)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 526 810)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 526 832)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 526 854)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 526 876)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 525 898)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 531 -1)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 533 12)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 534 25)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 535 39)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 536 52)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 536 67)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 537 82)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 537 98)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 537 114)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 537 130)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 538 146)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 538 164)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 538 181)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 539 198)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 539 215)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 539 234)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 539 251)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 539 270)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 538 287)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 537 303)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 535 321)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 534 338)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 533 355)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 533 372)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 532 386)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 532 402)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 531 416)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 530 428)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 531 443)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 532 458)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 533 472)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 534 489)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 535 505)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 535 525)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 536 544)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 537 563)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 539 585)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 541 608)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 543 632)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 544 656)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 546 683)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 546 711)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 546 738)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 546 764)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 546 789)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 546 812)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 547 835)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 548 856)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 549 879)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 549 898)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 547 3)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 549 16)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 551 29)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 553 43)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 554 56)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 554 71)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 555 86)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 555 102)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 555 118)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 555 134)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 150)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 168)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 185)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 202)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 557 219)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 557 238)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 255)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 274)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 555 291)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 554 307)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 552 325)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 552 341)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 550 358)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 550 375)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 549 389)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 548 405)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 547 419)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 547 432)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 549 446)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 552 461)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 553 476)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 554 493)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 555 509)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 529)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 548)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 556 567)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 558 589)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 560 612)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 561 636)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 563 660)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 564 687)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 565 714)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 566 742)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 566 768)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 793)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 816)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 839)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 860)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 883)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 559 5)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 562 18)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 565 32)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 46)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 568 59)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 568 74)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 89)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 105)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 121)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 137)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 570 153)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 570 171)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 570 188)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 205)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 223)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 241)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 568 258)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 568 277)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 568 294)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 310)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 565 328)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 564 344)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 563 361)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 563 378)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 562 392)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 560 408)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 559 422)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 559 435)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 562 449)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 565 464)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 567 479)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 569 495)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 572 512)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 573 532)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 573 551)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 573 570)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 575 592)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 575 615)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 576 639)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 578 663)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 579 690)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 580 717)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 581 745)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 771)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 796)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 819)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 842)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 863)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 584 886)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 574 10)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 577 23)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 579 37)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 581 51)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 64)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 79)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 94)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 110)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 126)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 142)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 584 158)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 584 176)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 584 193)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 583 210)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 228)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 245)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 261)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 581 280)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 581 297)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 580 314)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 579 332)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 578 348)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 575 361)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 576 395)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 574 408)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 574 422)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 574 436)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 579 466)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 582 478)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 586 496)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 588 513)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 589 533)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 590 552)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 590 571)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 592 594)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 593 616)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 594 640)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 595 664)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 597 691)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 599 718)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 601 747)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 601 773)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 602 797)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 603 820)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 603 843)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 603 864)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 604 885)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 577 451)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 588 14)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 591 27)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 593 41)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 595 55)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 596 68)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 596 83)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 597 98)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 597 114)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 597 130)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 597 146)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 598 162)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 598 180)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 598 197)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 597 214)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 596 232)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 596 249)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 596 265)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 595 284)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 595 301)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 594 318)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 593 336)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 592 352)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 589 365)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 590 399)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 588 412)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 588 426)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 594 469)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 598 484)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 602 500)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 604 516)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 607 534)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 609 556)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 575)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 596)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 620)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 613 644)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 615 669)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 617 693)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 618 720)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 619 750)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 621 778)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 622 802)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 623 826)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 623 848)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 623 867)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 624 890)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 591 455)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 589 441)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 575 379)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 602 20)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 605 33)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 607 47)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 609 61)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 610 74)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 610 89)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 104)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 120)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 136)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 152)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 612 168)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 612 186)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 612 203)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 611 220)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 610 238)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 610 255)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 610 271)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 602 432)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 606 447)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 616 489)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 619 507)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 623 523)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 626 541)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 629 562)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 630 582)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 631 601)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 632 625)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 633 649)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 636 674)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 638 701)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 639 728)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 641 757)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 642 783)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 643 808)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 644 832)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 644 854)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 644 877)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 645 896)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 610 461)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 612 474)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 619 22)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 622 35)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 624 49)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 626 63)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 627 76)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 627 91)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 628 106)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 628 122)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 628 138)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 628 154)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 629 170)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 629 188)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 629 205)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 628 222)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 627 240)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 627 257)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 627 273)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 619 434)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 623 449)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 634 492)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 638 509)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 642 525)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 645 543)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 647 565)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 648 585)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 649 603)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 650 627)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 651 651)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 654 676)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 656 703)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 658 730)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 660 759)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 661 785)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 663 810)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 665 835)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 665 857)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 665 879)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 667 898)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 627 463)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 629 476)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 646 451)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 656 494)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 659 509)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 663 526)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 666 544)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 669 566)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 672 587)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 674 607)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 675 630)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 677 651)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 678 677)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 680 703)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 680 730)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 682 760)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 683 786)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 685 812)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 687 837)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 688 859)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 689 879)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 690 898)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 649 466)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 652 479)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 666 450)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 676 493)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 679 508)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 683 525)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 686 543)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 689 565)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 692 586)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 694 606)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 695 629)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 697 650)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 698 676)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 700 702)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 701 729)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 703 759)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 704 785)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 706 811)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 707 836)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 708 858)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 709 878)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 710 897)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 669 465)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 672 478)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 683 451)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 693 494)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 696 509)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 700 526)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 703 544)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 706 566)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 709 587)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 711 607)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 712 630)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 714 651)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 715 677)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 717 703)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 718 730)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 720 760)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 721 786)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 723 812)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 724 837)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 725 859)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 726 879)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 727 898)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 686 466)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 689 479)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 698 452)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 708 495)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 711 510)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 715 527)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 718 545)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 721 567)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 724 588)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 726 608)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 727 631)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 729 652)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 730 678)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 732 704)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 733 731)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 735 761)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 736 787)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 738 813)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 739 838)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 740 860)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 741 880)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 742 899)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 701 467)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 704 480)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 713 453)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 723 496)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 726 511)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 730 528)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 733 546)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 736 568)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 739 589)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 741 609)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 742 632)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 744 653)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 745 679)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 747 705)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 748 732)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 750 762)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 751 788)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 753 814)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 754 839)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 755 861)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 756 881)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 716 468)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 719 482)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 732 482)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 737 496)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 740 511)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 745 528)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 748 546)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 751 570)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 754 590)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 755 606)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 756 629)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 758 650)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 759 676)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 761 702)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 762 729)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 764 759)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 765 785)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 767 811)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 768 836)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 769 858)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 770 878)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 771 897)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 730 465)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 733 478)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 750 497)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 754 511)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 759 528)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 761 547)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 764 569)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 766 587)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 767 603)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 768 626)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 770 647)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 771 673)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 773 699)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 774 726)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 776 756)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 777 782)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 779 808)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 780 833)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 781 855)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 782 875)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 783 894)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 742 462)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 745 475)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 766 496)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 770 512)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 775 528)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 778 547)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 780 567)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 782 585)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 783 602)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 784 623)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 786 644)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 787 670)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 789 696)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 790 723)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 792 753)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 793 779)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 795 805)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 796 830)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 797 852)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 798 872)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 799 891)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 758 459)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 761 472)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 787 512)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 792 528)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 795 547)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 797 567)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 799 585)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 800 602)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 801 623)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 803 644)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 804 670)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 806 696)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 807 723)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 809 753)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 810 779)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 812 805)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 813 830)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 814 852)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 815 872)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 816 891)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 775 459)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 778 472)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 812 547)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 814 567)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 816 585)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 817 602)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 818 623)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 820 644)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 821 670)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 823 696)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 824 723)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 826 753)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 827 779)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 829 805)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 830 830)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 831 852)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 832 872)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 833 891)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 792 459)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 795 472)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 843 724)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 845 754)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 846 780)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 848 806)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 849 831)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 850 853)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 851 873)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 852 892)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 860 758)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 861 784)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 863 810)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 864 835)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 865 857)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 866 877)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 867 896)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 874 791)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 876 817)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 877 842)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 878 864)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 879 884)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 889 849)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 890 871)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 891 891)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 901 898)" fill="#D1CDCE" />
            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 914 898)" fill="#D1CDCE" />
        </svg>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Navbar from '../navbar.vue';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const checkerContainer = ref<HTMLElement | null>(null);
const checkerNav = ref<HTMLElement | null>(null);
const checkerTitle = ref<HTMLElement | null>(null);
const checkerText = ref<HTMLElement | null>(null);
const checkerBtn = ref<HTMLElement | null>(null);
const checkerBoxes = ref<any>(null);
const svgRound = ref<HTMLElement | null>(null);


onMounted(() => {
    if (!checkerContainer.value) return;
    // Split Text Function
    const splitWords = (element: any) => {
        const words = element.innerText.split(" ");
        element.innerHTML = words.map((word: any) => `<span class="word">${word}</span>`).join(" ");
        return element.querySelectorAll(".word");
    };

    const titleWords = splitWords(checkerTitle.value);
    const textWords = splitWords(checkerText.value);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: checkerContainer.value,
            // start: "top 85%", // Trigger when 85% of the section is in view
            // toggleActions: "play none none reverse",
        },
    });

    tl.from(checkerNav.value, {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power4.out",
        delay: 2.5,
    })
    tl.from(svgRound.value, {
        opacity: 0,
        duration: 3 ,
        ease: "power4.out",
    });
    tl.fromTo(
        titleWords,
        { opacity: 0, y: 50, ease: "power3.out" },
        {
            opacity: 1,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.15, // Smooth sequential animation
        },
        "-=0.4"
    )
    tl.from(checkerTitle.value, { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" }, "-=0.8")
    tl.fromTo(
        textWords,
        { opacity: 0, y: 50, ease: "power3.out" },
        {
            opacity: 1,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.10, // Smooth sequential animation
        },
        "-=0.8"
    )
    // Text Animation (Slight Delay)
    tl.from(checkerText.value, { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=1")
        .from(checkerBtn.value, {
            opacity: 0,
            y: 31,
            duration: 1,
            ease: "power3.out",
        }, "-=0.5")
    const boxes = checkerBoxes.value?.children;
    tl.from(boxes, {
        y: 31,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.5, // Adds a small delay between each box animation
    });
    const circles: any = svgRound.value?.querySelectorAll("circle")

    // Select a random half of the circles
    const halfCircles = gsap.utils.shuffle(circles).slice(0, Math.ceil(circles.length / 2));

    // Animate only the selected half
    gsap.to(circles, {
        opacity: 0.3,
        duration: 1.2,
        scale: 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { amount: 1, from: "random" },
    });
});
</script>


<style lang="scss" scoped>
.welcome {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

/* Background video */
.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

/* Optional overlay */
.overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 769px) {
    .overlay {
        justify-content: flex-end;
    }

}
</style>