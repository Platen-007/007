<style>
  .angry-grid {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    border-bottom: 1px solid #fff;
  }

  .angry-grid a.active {
    border: 2px solid red;
  }

  .tab-pane {
    display: none;
  }

  .tab-pane.active {
    display: block;
  }

  [id*="wwc_room_item_"]:hover {
    background-color: yellow;
    color: black;
  }

  [id*="wwc_room_item_"] a:hover {
    color: black;
  }

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 15px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.88);
    -webkit-animation-duration: 0.35s;
    animation-duration: 0.35s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    /* Modifiers */
    /* States */
  }

  .modal__dialog {
    position: relative;
    max-width: 500px;
    padding: 20px;
    margin: auto;
    border-radius: 4px;
    background-color: #fff;
  }

  .modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    border: none;
    color: #ccc;
    background-color: transparent;
    background-image: none;
  }

  .modal__close:focus {
    outline: 0;
  }

  .modal__header {
    border-bottom: 1px solid #e2e2e2;
  }

  .modal__title {
    margin: 0 0 15px;
  }

  .modal__content {
    padding: 10px 0;
    font-size: 13px;
    line-height: 1.6;
    color: #555;
  }

  .modal__footer {
    padding-top: 20px;
    border-top: 1px solid #e2e2e2;
    text-align: right;
  }

  .modal--fullscreen {
    padding: 5px;
  }

  .modal--fullscreen .modal__dialog {
    width: 100%;
    max-width: none;
    height: 100%;
    border-radius: 0;
  }

  .modal.is-modal-active {
    display: flex;
  }

  .apoio-aqui {
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    border-bottom: 2px solid #fff;
    padding-bottom: 8px;
  }

  .sprite {
    background-image: url(https://asserts.wormworld.io/images/flags_region.png);
    background-repeat: no-repeat;
    background-size: 135px 120px;
    display: block;
    margin: 6px 0;
  }

  .sprite-ae-flag {
    width: 40px;
    height: 25px;
    background-position: -3px -4px;
  }

  .sprite-au-flag {
    width: 40px;
    height: 25px;
    background-position: -48px -3px;
  }

  .sprite-br-flag {
    width: 40px;
    height: 25px;
    background-position: -2px -33px;
  }

  .sprite-ca-flag {
    width: 40px;
    height: 25px;
    background-position: -48px -33px;
  }

  .sprite-fr-flag {
    width: 40px;
    height: 25px;
    background-position: -2px -62px;
  }

  .sprite-de-flag {
    width: 40px;
    height: 25px;
    background-position: -48px -62px;
  }

  .sprite-jp-flag {
    width: 40px;
    height: 25px;
    background-position: -48px -92px;
  }

  .sprite-mx-flag {
    width: 40px;
    height: 25px;
    background-position: -92px -3px;
  }

  .sprite-sg-flag {
    width: 40px;
    height: 25px;
    background-position: -92px -33px;
  }

  .sprite-uk-flag {
    width: 40px;
    height: 25px;
    background-position: -92px -92px;
  }

  .sprite-us-flag {
    width: 40px;
    height: 25px;
    background-position: -92px -92px;
  }
</style>
<div id="load_page_apoiador">
  <div class="title-worm-world-connect" style="position: absolute; top: 0; z-index: 1; width: 92%">
    <img src="https://asserts.wormworld.io/images/favicon64x64.png" width="20" align="center" alt="" />
    WormWorld Connect
  </div>
  
    <div style="height: 285px; overflow: auto; border: 1px solid; margin: 6px auto" id="wwc_tabs">
      <div class="angry-grid f32">
        
          <a href="#tabs0" id="linktab_0">
            <i class="sprite sprite-br-flag"></i>
          </a>
          
          <a href="#tabs1" id="linktab_1">
            <i class="sprite sprite-us-flag"></i>
          </a>
          
          <a href="#tabs2" id="linktab_2">
            <i class="sprite sprite-ca-flag"></i>
          </a>
          
          <a href="#tabs3" id="linktab_3">
            <i class="sprite sprite-mx-flag"></i>
          </a>
          
          <a href="#tabs4" id="linktab_4">
            <i class="sprite sprite-de-flag"></i>
          </a>
          
          <a href="#tabs5" id="linktab_5">
            <i class="sprite sprite-fr-flag"></i>
          </a>
          
          <a href="#tabs6" id="linktab_6">
            <i class="sprite sprite-sg-flag"></i>
          </a>
          
          <a href="#tabs7" id="linktab_7">
            <i class="sprite sprite-jp-flag"></i>
          </a>
          
          <a href="#tabs8" id="linktab_8">
            <i class="sprite sprite-au-flag"></i>
          </a>
          
          <a href="#tabs9" id="linktab_9">
            <i class="sprite sprite-ae-flag"></i>
          </a>
          
      </div>
      
        <div class="tab-pane" id="tabs0" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:30560/wormy" data-room="1br"
                            data-type="false">
                            <strong>
                              01 &nbsp;₳V̶Ⱡ🌊₳V̶₳Ł₳NCHE🌊
                            </strong>
                          </div>
                          <a href="https://www.instagram.com/avl_wormate?igsh=MzRlOXdlOTd1bmNu" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AVL.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31106/wormy" data-room="2br"
                            data-type="false">
                            <strong>
                              02 &nbsp;WGA -TIMES
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_WGATIMES.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31713/wormy" data-room="3br"
                            data-type="false">
                            <strong>
                              03 &nbsp;т5☪ Turma da 5ª Série
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_5SERIE02.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:32476/wormy" data-room="4br"
                            data-type="false">
                            <strong>
                              04 &nbsp;FAMILIA BBW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_BBW.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31750/wormy" data-room="5br"
                            data-type="false">
                            <strong>
                              05 &nbsp;FX
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_FXNOVO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31713/wormy" data-room="6br"
                            data-type="false">
                            <strong>
                              06 &nbsp;COWBOY
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@cbltcowboyclipes" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_COWBOY04.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:30135/wormy" data-room="7br"
                            data-type="false">
                            <strong>
                              07 &nbsp;CLÃ-DESTINO
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_CLADESTINO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31750/wormy" data-room="8br"
                            data-type="false">
                            <strong>
                              08 &nbsp;🎭FAMÍLIA ⅤǤÐ🎭
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_VGA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30135/wormy" data-room="9br"
                            data-type="false">
                            <strong>
                              09 &nbsp;Øℭℭ 💣ØRĐEM ℭØM ℭĀØS💣
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ORDEM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:32476/wormy" data-room="10br"
                            data-type="false">
                            <strong>
                              10 &nbsp;RNG
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_RNG02.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31975/wormy" data-room="11br"
                            data-type="false">
                            <strong>
                              11 &nbsp;FVG
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_FVG01.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30135/wormy" data-room="12br"
                            data-type="false">
                            <strong>
                              12 &nbsp;FAMÍLIA CSG
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_CSG.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31975/wormy" data-room="13br"
                            data-type="false">
                            <strong>
                              13 &nbsp;ɢʅ DAVID RAPU®️ 🐛
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/GLDavidRapu" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_DAVID.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31091/wormy" data-room="14br"
                            data-type="false">
                            <strong>
                              14 &nbsp;Tik Tok 💥 Duchine 💥 Falido
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@duchinepereira?_t=8eOyrFS8Oqk&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_FALIDO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31106/wormy" data-room="15br"
                            data-type="false">
                            <strong>
                              15 &nbsp;TIMES NEWS 1
                            </strong>
                          </div>
                          <a href="wss:wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:32638/wormy" data-room="16br"
                            data-type="false">
                            <strong>
                              16 &nbsp;TIMES NEWS 2
                            </strong>
                          </div>
                          <a href="wss:wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31555/wormy" data-room="17br"
                            data-type="false">
                            <strong>
                              17 &nbsp;TIMES NEWS 3
                            </strong>
                          </div>
                          <a href="wss:wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:30809/wormy" data-room="18br"
                            data-type="false">
                            <strong>
                              18 &nbsp;🎀 GANG DO LACINHO 🎀
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@juhlacinho?_t=8lw2EJdkGJC&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_LACINHOS.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:30392/wormy" data-room="19br"
                            data-type="false">
                            <strong>
                              19 &nbsp;FAMÍLIA VLP
                            </strong>
                          </div>
                          <a href="https://tiktok.com/@volpeof" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_VLP.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:30171/wormy" data-room="20br"
                            data-type="false">
                            <strong>
                              20 &nbsp;🦋Butterfly
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@butterflyylive?_t=8l0kxGD4Mca&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_BORBOLETA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs1" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:30407/wormy" data-room="1us"
                            data-type="false">
                            <strong>
                              01 &nbsp;[AG] AguzGamer
                            </strong>
                          </div>
                          <a href="https://wormworld.io/team/aguz-gamer/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/sala_45.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30171/wormy" data-room="2us"
                            data-type="false">
                            <strong>
                              02 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31750/wormy" data-room="3us"
                            data-type="false">
                            <strong>
                              03 &nbsp;DF GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@donfrankie?_t=ZT-8u4fAo8WMAg&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_DF.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32111/wormy" data-room="4us"
                            data-type="false">
                            <strong>
                              04 &nbsp;TF WENDYS
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/LaWendyss?mibextid=LQQJ4d" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_WENDS.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30536/wormy" data-room="5us"
                            data-type="false">
                            <strong>
                              05 &nbsp;GYA 09
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/search/top?q=gya09" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_GYA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:31279/wormy" data-room="6us"
                            data-type="false">
                            <strong>
                              06 &nbsp;SUPGAMING
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SUP.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32111/wormy" data-room="7us"
                            data-type="false">
                            <strong>
                              07 &nbsp;LA REYNA DEL SUR
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/lareynadelsur28?mibextid=ZbWKwL" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_RDSNOVO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30162/wormy" data-room="8us"
                            data-type="false">
                            <strong>
                              08 &nbsp;FF FAMILY FOREVER
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_FOREVER.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:32368/wormy" data-room="9us"
                            data-type="false">
                            <strong>
                              09 &nbsp;TNS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30296/wormy" data-room="10us"
                            data-type="false">
                            <strong>
                              10 &nbsp;DAVID RAPU
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:32584/wormy" data-room="11us"
                            data-type="false">
                            <strong>
                              11 &nbsp;THE MAGIC DRAGON
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_DRAGON.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:31555/wormy" data-room="12us"
                            data-type="false">
                            <strong>
                              12 &nbsp;02 TEAMS YINYI and IZA 
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_YINKI.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:30072/wormy" data-room="13us"
                            data-type="false">
                            <strong>
                              13 &nbsp;2 TEAMS 3  NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:31000/wormy" data-room="14us"
                            data-type="false">
                            <strong>
                              14 &nbsp;01 TEAMS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32746/wormy" data-room="15us"
                            data-type="false">
                            <strong>
                              15 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32403/wormy" data-room="16us"
                            data-type="false">
                            <strong>
                              16 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:32465/wormy" data-room="17us"
                            data-type="false">
                            <strong>
                              17 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30296/wormy" data-room="18us"
                            data-type="false">
                            <strong>
                              18 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30162/wormy" data-room="19us"
                            data-type="false">
                            <strong>
                              19 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32091/wormy" data-room="20us"
                            data-type="false">
                            <strong>
                              20 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_21" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32214/wormy" data-room="21us"
                            data-type="false">
                            <strong>
                              21 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_22" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30042/wormy" data-room="22us"
                            data-type="false">
                            <strong>
                              22 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_23" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32746/wormy" data-room="23us"
                            data-type="false">
                            <strong>
                              23 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_24" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30296/wormy" data-room="24us"
                            data-type="false">
                            <strong>
                              24 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_25" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30135/wormy" data-room="25us"
                            data-type="false">
                            <strong>
                              25 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_26" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:30407/wormy" data-room="26us"
                            data-type="false">
                            <strong>
                              26 &nbsp;NEW DRAGON BALL
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_27" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31750/wormy" data-room="27us"
                            data-type="false">
                            <strong>
                              27 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_28" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30208/wormy" data-room="28us"
                            data-type="false">
                            <strong>
                              28 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_29" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:30332/wormy" data-room="29us"
                            data-type="false">
                            <strong>
                              29 &nbsp;NEW TEST
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_30" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:32746/wormy" data-room="30us"
                            data-type="false">
                            <strong>
                              30 &nbsp;NEW TEST
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_31" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:30703/wormy" data-room="31us"
                            data-type="false">
                            <strong>
                              31 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_32" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:31026/wormy" data-room="32us"
                            data-type="false">
                            <strong>
                              32 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_33" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:31142/wormy" data-room="33us"
                            data-type="false">
                            <strong>
                              33 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_34" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:31211/wormy" data-room="34us"
                            data-type="false">
                            <strong>
                              34 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_35" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:31311/wormy" data-room="35us"
                            data-type="false">
                            <strong>
                              35 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_36" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:31516/wormy" data-room="36us"
                            data-type="false">
                            <strong>
                              36 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_37" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:32053/wormy" data-room="37us"
                            data-type="false">
                            <strong>
                              37 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_38" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:32212/wormy" data-room="38us"
                            data-type="false">
                            <strong>
                              38 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_39" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sao-a.wormate.io:31163/wormy" data-room="39us"
                            data-type="false">
                            <strong>
                              39 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_40" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:32500/wormy" data-room="40us"
                            data-type="false">
                            <strong>
                              40 &nbsp;WWC - VIRGÍNIA
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_41" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30809/wormy" data-room="41us"
                            data-type="false">
                            <strong>
                              41 &nbsp;WWC -DALLAS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs2" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30162/wormy" data-room="1ca"
                            data-type="false">
                            <strong>
                              01 &nbsp;SUP TANNER GAMING
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SUP_TANER.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31091/wormy" data-room="2ca"
                            data-type="false">
                            <strong>
                              02 &nbsp;NEWS-news 
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31230/wormy" data-room="3ca"
                            data-type="false">
                            <strong>
                              03 &nbsp;NEWS-news 
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31282/wormy" data-room="4ca"
                            data-type="false">
                            <strong>
                              04 &nbsp;NEWS-news 
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31290/wormy" data-room="5ca"
                            data-type="false">
                            <strong>
                              05 &nbsp;NEWS-news 
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30135/wormy" data-room="6ca"
                            data-type="false">
                            <strong>
                              06 &nbsp;NEWS- tiozão
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30165/wormy" data-room="7ca"
                            data-type="false">
                            <strong>
                              07 &nbsp;NEWS- news
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30339/wormy" data-room="8ca"
                            data-type="false">
                            <strong>
                              08 &nbsp;NEWS - FEG
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:31084/wormy" data-room="9ca"
                            data-type="false">
                            <strong>
                              09 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:30786/wormy" data-room="10ca"
                            data-type="false">
                            <strong>
                              10 &nbsp;NEWS- tnt
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs3" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:32584/wormy" data-room="1mx"
                            data-type="false">
                            <strong>
                              01 &nbsp;NRG
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_NRG04.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30703/wormy" data-room="2mx"
                            data-type="false">
                            <strong>
                              02 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31211/wormy" data-room="3mx"
                            data-type="false">
                            <strong>
                              03 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32053/wormy" data-room="4mx"
                            data-type="false">
                            <strong>
                              04 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32212/wormy" data-room="5mx"
                            data-type="false">
                            <strong>
                              05 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30135/wormy" data-room="6mx"
                            data-type="false">
                            <strong>
                              06 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31216/wormy" data-room="7mx"
                            data-type="false">
                            <strong>
                              07 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs4" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="1de"
                            data-type="false">
                            <strong>
                              01 &nbsp;TAKTIK
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@taktiksavasi?_t=8pTbWcGfkBd&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_TAKTIKLER.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30259/wormy" data-room="2de"
                            data-type="false">
                            <strong>
                              02 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="3de"
                            data-type="false">
                            <strong>
                              03 &nbsp;فلسطيني ولا
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@falastinee11?_t=ZS-8v5naIEIxhl&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_PALESTINA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="4de"
                            data-type="false">
                            <strong>
                              04 &nbsp;SAMSON
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@samsonshow.no?_t=8kSYv8Q9B9K&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SAMSOM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30140/wormy" data-room="5de"
                            data-type="false">
                            <strong>
                              05 &nbsp;KENT AViZE
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@kentavize?_t=ZS-8sCxxzZSuoe&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KENT.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="6de"
                            data-type="false">
                            <strong>
                              06 &nbsp;SVS RAMO
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ramazantgra?_t=ZS-8tJYqmbUsSL&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SVS02.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="7de"
                            data-type="false">
                            <strong>
                              07 &nbsp;HAMA SHERWANI
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ham4_sherwani/live" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_HAMA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30702/wormy" data-room="8de"
                            data-type="false">
                            <strong>
                              08 &nbsp;SVS GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ramazantgra?_t=8p2gllV4H8i&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SVS.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="9de"
                            data-type="false">
                            <strong>
                              09 &nbsp;AZAD.IO
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@azad.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AZAD.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31750/wormy" data-room="10de"
                            data-type="false">
                            <strong>
                              10 &nbsp;AD WALED
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/ADWaledddd" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AD_WALED.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="11de"
                            data-type="false">
                            <strong>
                              11 &nbsp;Tikسراج البياتي
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@sb.ax?_t=8pX4L82Qbej&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEM_SIRAJAZUL.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="12de"
                            data-type="false">
                            <strong>
                              12 &nbsp;سوري فخامة
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@syrianexcellency?_t=8pwBAumEqqG&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SYRIA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31392/wormy" data-room="13de"
                            data-type="false">
                            <strong>
                              13 &nbsp;WW
                            </strong>
                          </div>
                          <a href="wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30106/wormy" data-room="14de"
                            data-type="false">
                            <strong>
                              14 &nbsp;𝚉𝙸𝙳𝙰𝙽𝙴
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@zidane_alsaidi?is_from_webapp=1&amp;sender_device=pc" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ZIDANE.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31038/wormy" data-room="15de"
                            data-type="false">
                            <strong>
                              15 &nbsp; KTKOT GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ktkotgaming1?_t=8pzrAmm725b&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KTKOT.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32581/wormy" data-room="16de"
                            data-type="false">
                            <strong>
                              16 &nbsp;✯ℕ𝕖𝕞𝕖𝕤𝕚𝕤✯ 🔵2 TEAM🔴
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_NEMESIS.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32030/wormy" data-room="17de"
                            data-type="false">
                            <strong>
                              17 &nbsp;✦✧𝐃𝐫𝐞𝐚𝐦💙𝐓𝐞𝐚𝐦✧✦
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_DREAM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32355/wormy" data-room="18de"
                            data-type="false">
                            <strong>
                              18 &nbsp;NİGHTMARE ™ 🔴 2 TEAM
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@.t.upac?_t=ZS-8svy0UNLOqL&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_NIGH.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:30245/wormy" data-room="19de"
                            data-type="false">
                            <strong>
                              19 &nbsp;2 TEAMS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31038/wormy" data-room="20de"
                            data-type="false">
                            <strong>
                              20 &nbsp;SBB CALN
                            </strong>
                          </div>
                          <a href="https://discord.gg/m9fyzxjyAk" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SIRAJ09.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_21" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="21de"
                            data-type="false">
                            <strong>
                              21 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_22" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30106/wormy" data-room="22de"
                            data-type="false">
                            <strong>
                              22 &nbsp;غــضـــب
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ilyasxh1?_t=8kGNeGDQTP3&amp;_r=1&amp;fbclid=IwAR3AjAmw4wz3VLk0fS1bCKYPx1TfEyonSkCcXSa22HCpLcMMRP2TFtOXRC0" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_LOBO_VERDE.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_23" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30265/wormy" data-room="23de"
                            data-type="false">
                            <strong>
                              23 &nbsp;25 YPG 
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ypg_25?_t=8ZMCOqtLzaH&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_YPG25.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_24" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30339/wormy" data-room="24de"
                            data-type="false">
                            <strong>
                              24 &nbsp;ABO ALAA
                            </strong>
                          </div>
                          <a href="https://vm.tiktok.com/ZMN4Uyaa6/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ABO_ALAA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_25" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31533/worm" data-room="25de"
                            data-type="false">
                            <strong>
                              25 &nbsp;BIGSHOW GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@bigshow_gaming?_t=8hie0p7d0oI&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KURDISTÃO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_26" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31819/wormy" data-room="26de"
                            data-type="false">
                            <strong>
                              26 &nbsp;👑🅼🅶🆁👑
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/mido23gaming" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_MIDO_NOVA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_27" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30208/wormy" data-room="27de"
                            data-type="false">
                            <strong>
                              27 &nbsp;SAAD 75
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SAADO75.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_28" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31819/wormy" data-room="28de"
                            data-type="false">
                            <strong>
                              28 &nbsp;LEADER GAMING
                            </strong>
                          </div>
                          <a href="wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_LEADER.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_29" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="29de"
                            data-type="false">
                            <strong>
                              29 &nbsp;TIK_SERHESHKO
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@serheshko?_t=8eoUPRskzws&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_TIKSERHESHKO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_30" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30208/wormy" data-room="30de"
                            data-type="false">
                            <strong>
                              30 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_31" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32054/wormy" data-room="31de"
                            data-type="false">
                            <strong>
                              31 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_32" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31533/wormy" data-room="32de"
                            data-type="false">
                            <strong>
                              32 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_33" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31819/wormy" data-room="33de"
                            data-type="false">
                            <strong>
                              33 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_34" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31750/wormy" data-room="34de"
                            data-type="false">
                            <strong>
                              34 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_35" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30171/wormy" data-room="35de"
                            data-type="false">
                            <strong>
                              35 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_36" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32054/wormy" data-room="36de"
                            data-type="false">
                            <strong>
                              36 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_37" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="37de"
                            data-type="false">
                            <strong>
                              37 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_38" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31038/wormy" data-room="38de"
                            data-type="false">
                            <strong>
                              38 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_39" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="39de"
                            data-type="false">
                            <strong>
                              39 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_40" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31750/wormy" data-room="40de"
                            data-type="false">
                            <strong>
                              40 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_41" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30171/wormy" data-room="41de"
                            data-type="false">
                            <strong>
                              41 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_42" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32054/wormy" data-room="42de"
                            data-type="false">
                            <strong>
                              42 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_43" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="43de"
                            data-type="false">
                            <strong>
                              43 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_44" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32584/wormy" data-room="44de"
                            data-type="false">
                            <strong>
                              44 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_45" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30725/wormy" data-room="45de"
                            data-type="false">
                            <strong>
                              45 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_46" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30135/wormy" data-room="46de"
                            data-type="false">
                            <strong>
                              46 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_47" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30809/wormy" data-room="47de"
                            data-type="false">
                            <strong>
                              47 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_48" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31084/wormy" data-room="48de"
                            data-type="false">
                            <strong>
                              48 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_49" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31091/wormy" data-room="49de"
                            data-type="false">
                            <strong>
                              49 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_50" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31163/wormy" data-room="50de"
                            data-type="false">
                            <strong>
                              50 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_51" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31230/wormy" data-room="51de"
                            data-type="false">
                            <strong>
                              51 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_52" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30909/wormy" data-room="52de"
                            data-type="false">
                            <strong>
                              52 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_53" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30327/wormy" data-room="53de"
                            data-type="false">
                            <strong>
                              53 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_54" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31908/wormy" data-room="54de"
                            data-type="false">
                            <strong>
                              54 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_55" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32405/wormy" data-room="55de"
                            data-type="false">
                            <strong>
                              55 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_56" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32577/wormy" data-room="56de"
                            data-type="false">
                            <strong>
                              56 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_57" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30161/wormy" data-room="57de"
                            data-type="false">
                            <strong>
                              57 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_58" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31123/wormy" data-room="58de"
                            data-type="false">
                            <strong>
                              58 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_59" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30339/wormy" data-room="59de"
                            data-type="false">
                            <strong>
                              59 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_60" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31859/wormy" data-room="60de"
                            data-type="false">
                            <strong>
                              60 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_61" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32611/wormy" data-room="61de"
                            data-type="false">
                            <strong>
                              61 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_62" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://vin-a.wormate.io:30703/wormy" data-room="62de"
                            data-type="false">
                            <strong>
                              62 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_63" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://hil-a.wormate.io:30213/wormy" data-room="63de"
                            data-type="false">
                            <strong>
                              63 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_64" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:32584/wormy" data-room="64de"
                            data-type="false">
                            <strong>
                              64 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_65" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30245/wormy" data-room="65de"
                            data-type="false">
                            <strong>
                              65 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_66" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30106/wormy" data-room="66de"
                            data-type="false">
                            <strong>
                              66 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_67" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30135/wormy" data-room="67de"
                            data-type="false">
                            <strong>
                              67 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_68" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32703/wormy" data-room="68de"
                            data-type="false">
                            <strong>
                              68 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_69" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:32650/wormy" data-room="69de"
                            data-type="false">
                            <strong>
                              69 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs5" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="1fr"
                            data-type="false">
                            <strong>
                              01 &nbsp;FDZ 🦊 MINOU 🦊
                            </strong>
                          </div>
                          <a href="https://vt.tiktok.com/ZS24gWd3U/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_MINOU.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31038/wormy" data-room="2fr"
                            data-type="false">
                            <strong>
                              02 &nbsp;𝕜Ⓓ _𝔸𝕃Đᵘк𝓣𝕆𝑜𝕣
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@alduktoor?_t=8nswhiNoHRa&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KD.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="3fr"
                            data-type="false">
                            <strong>
                              03 &nbsp;BARZAN GAMING
                            </strong>
                          </div>
                          <a href="https://vm.tiktok.com/ZNe38fM3B/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_BARZAN.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:32223/wormy" data-room="4fr"
                            data-type="false">
                            <strong>
                              04 &nbsp;GLITCH NOURA
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@nouraglitch?lang=en" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_GLITCH.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30140/wormy" data-room="5fr"
                            data-type="false">
                            <strong>
                              05 &nbsp;TIK TOK أبو شعر 
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@.abo.shear?_t=ZS-8tbucEf4CiD&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEM_AMARELO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="6fr"
                            data-type="false">
                            <strong>
                              06 &nbsp;KAMIKAZE
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@kamikazegaming34" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KAMI.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31038/wormy" data-room="7fr"
                            data-type="false">
                            <strong>
                              07 &nbsp;El ARASAL GAMING
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/share/156X8D7so2/?mibextid=LQQJ4d" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ARA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31038/wormy" data-room="8fr"
                            data-type="false">
                            <strong>
                              08 &nbsp;FIRE@YT🔥
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@pindi__gaming?_t=8qNmcAbWNP7&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_FIRE04.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dal-b.wormate.io:32584/wormy" data-room="9fr"
                            data-type="false">
                            <strong>
                              09 &nbsp;𝑨𝑳𝑨𝑹𝑨𝑩 💯𝑨𝑹𝑩
                            </strong>
                          </div>
                          <a href="https://vm.tiktok.com/ZGeWreN3P/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ARB.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="10fr"
                            data-type="false">
                            <strong>
                              10 &nbsp;KL TEAM
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@kcxbaro" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KL.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31695/wormy" data-room="11fr"
                            data-type="false">
                            <strong>
                              11 &nbsp;ARAM KHALID
                            </strong>
                          </div>
                          <a href="https://vt.tiktok.com/ZS24gWd3U/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ARAM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30106/wormy" data-room="12fr"
                            data-type="false">
                            <strong>
                              12 &nbsp;ROKDAN القيادة
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@rokdansy" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ROKDAN.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31038/wormy" data-room="13fr"
                            data-type="false">
                            <strong>
                              13 &nbsp; 💫KD 💫الكوبرا
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@alkobra.kd8?_t=8qPjMKLiDEP&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_TIKGAMING.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:30909/wormy" data-room="14fr"
                            data-type="false">
                            <strong>
                              14 &nbsp;Abo Ghra - ابو غره
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@abo_ghra?_t=8kortRnJ9Eb&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ABOGHRA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31038/wormy" data-room="15fr"
                            data-type="false">
                            <strong>
                              15 &nbsp;HÜMANIST
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_HUMANIST.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:32054/wormy" data-room="16fr"
                            data-type="false">
                            <strong>
                              16 &nbsp;𝒯𝒽𝑒 𝐸𝓂𝓅𝑒𝓇𝑜𝓇
                            </strong>
                          </div>
                          <a href="https://discord.gg/epr0" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_EMPEROR.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30140/wormy" data-room="17fr"
                            data-type="false">
                            <strong>
                              17 &nbsp;رضوان كيمنك
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_tartaruga.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30106/wormy" data-room="18fr"
                            data-type="false">
                            <strong>
                              18 &nbsp;KURDO101 GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@kurdo_101_gaming?_t=8jp0w84Mqk4&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_KURDO101.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31392/wormy" data-room="19fr"
                            data-type="false">
                            <strong>
                              19 &nbsp;ℋ𝒜ℛ𝒜ℳ.¹⁰³
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@haram.103?is_from_webapp=1&amp;sender_device=pc" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_HARAM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31819/wormy" data-room="20fr"
                            data-type="false">
                            <strong>
                              20 &nbsp;MZAG GAMİNG
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@ebla3.gaming" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_MZAG.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_21" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:31695/wormy" data-room="21fr"
                            data-type="false">
                            <strong>
                              21 &nbsp;AMiRO ⚔️GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@amirou_gaming_ag1?_t=8klAnLxI1HZ&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AMIRO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_22" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30055/wormy" data-room="22fr"
                            data-type="false">
                            <strong>
                              22 &nbsp;FDZ🦊DZIRI GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@dzirigaming" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_DIZIR.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_23" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://gra-a.wormate.io:30265/wormy" data-room="23fr"
                            data-type="false">
                            <strong>
                              23 &nbsp;𝚉𝙸𝙳𝙰𝙽𝙴 | زيـدان
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@zidane_up?is_from_webapp=1&amp;sender_device=pc" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ZIDANE.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs6" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:31764/wormy" data-room="1sg"
                            data-type="false">
                            <strong>
                              01 &nbsp;ZG&amp;PW
                            </strong>
                          </div>
                          <a href="https://wormworld.io/active" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ZG&amp;PW.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31211/wormy" data-room="2sg"
                            data-type="false">
                            <strong>
                              02 &nbsp;TEM BPG
                            </strong>
                          </div>
                          <a href="https://wormworld.io/team/team-bpg/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/sala_31.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:30274/wormy" data-room="3sg"
                            data-type="false">
                            <strong>
                              03 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io/team/team-bpg/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31764/wormy" data-room="4sg"
                            data-type="false">
                            <strong>
                              04 &nbsp;Kẹo Ngọt
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/groups/familykeongot/?ref=share" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/sala_24.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:31764/wormy" data-room="5sg"
                            data-type="false">
                            <strong>
                              05 &nbsp;😈IMAM GAMING🔥
                            </strong>
                          </div>
                          <a href="https://youtube.com/@sagimamgaming-wormateio?si=dS5_7YYg2kBMhIhG" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_IMAM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30703/wormy" data-room="6sg"
                            data-type="false">
                            <strong>
                              06 &nbsp;AZ FAMILY
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AZFAMILY.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:31216/wormy" data-room="7sg"
                            data-type="false">
                            <strong>
                              07 &nbsp;AZ FAMILY -Server 16
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AZFAMILY.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30161/wormy" data-room="8sg"
                            data-type="false">
                            <strong>
                              08 &nbsp;👿PRINCE GAMING🔥
                            </strong>
                          </div>
                          <a href="https://youtube.com/shorts/u2-svZLQkLA?si=V4rk-bYmuwptKJMu" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_PRINCE.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:30161/wormy" data-room="9sg"
                            data-type="false">
                            <strong>
                              09 &nbsp;⚚𝙎𝙂 𝒞𝐿𝒜𝒩
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SOLO.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:31764/wormy" data-room="10sg"
                            data-type="false">
                            <strong>
                              10 &nbsp;BOOM@YT💥
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@boomyt1?_t=8s60kyQnq8y&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_BOOM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30165/wormy" data-room="11sg"
                            data-type="false">
                            <strong>
                              11 &nbsp;EkagamingV2
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/ekagamingV2" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/sala_43.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32212/wormy" data-room="12sg"
                            data-type="false">
                            <strong>
                              12 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:32677/wormy" data-room="13sg"
                            data-type="false">
                            <strong>
                              13 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31026/wormy" data-room="14sg"
                            data-type="false">
                            <strong>
                              14 &nbsp;AMG
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AMG.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31211/wormy" data-room="15sg"
                            data-type="false">
                            <strong>
                              15 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:31203/wormy" data-room="16sg"
                            data-type="false">
                            <strong>
                              16 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31026/wormy" data-room="17sg"
                            data-type="false">
                            <strong>
                              17 &nbsp;CHERRYLAND&#39;S
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_CHERRY.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30809/wormy" data-room="18sg"
                            data-type="false">
                            <strong>
                              18 &nbsp;HOYWAN ZONE
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/team_HoyWanzone.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_19" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32053/wormy" data-room="19sg"
                            data-type="false">
                            <strong>
                              19 &nbsp;WWC- NEW 1
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_20" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:31764/wormy" data-room="20sg"
                            data-type="false">
                            <strong>
                              20 &nbsp;WWC- NEW 1
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_21" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30208/wormy" data-room="21sg"
                            data-type="false">
                            <strong>
                              21 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_22" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31533/wormy" data-room="22sg"
                            data-type="false">
                            <strong>
                              22 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_23" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31750/wormy" data-room="23sg"
                            data-type="false">
                            <strong>
                              23 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_24" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32677/wormy" data-room="24sg"
                            data-type="false">
                            <strong>
                              24 &nbsp;WORNMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_25" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31353/wormy" data-room="25sg"
                            data-type="false">
                            <strong>
                              25 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_26" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32053/wormy" data-room="26sg"
                            data-type="false">
                            <strong>
                              26 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/ekagamingV2" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_27" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:30165/wormy" data-room="27sg"
                            data-type="false">
                            <strong>
                              27 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_28" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-b.wormate.io:32677/wormy" data-room="28sg"
                            data-type="false">
                            <strong>
                              28 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_29" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32500/wormy" data-room="29sg"
                            data-type="false">
                            <strong>
                              29 &nbsp;WORNMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_30" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32609/wormy" data-room="30sg"
                            data-type="false">
                            <strong>
                              30 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_31" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30135/wormy" data-room="31sg"
                            data-type="false">
                            <strong>
                              31 &nbsp;NEW TEST
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_32" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30161/wormy" data-room="32sg"
                            data-type="false">
                            <strong>
                              32 &nbsp;NEW TEST
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_33" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30171/wormy" data-room="33sg"
                            data-type="false">
                            <strong>
                              33 &nbsp;NEW TEST
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_34" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30208/wormy" data-room="34sg"
                            data-type="false">
                            <strong>
                              34 &nbsp;NEW TEST
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_35" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30327/wormy" data-room="35sg"
                            data-type="false">
                            <strong>
                              35 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_36" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30339/wormy" data-room="36sg"
                            data-type="false">
                            <strong>
                              36 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_37" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30371/wormy" data-room="37sg"
                            data-type="false">
                            <strong>
                              37 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_38" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30702/wormy" data-room="38sg"
                            data-type="false">
                            <strong>
                              38 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_39" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30725/wormy" data-room="39sg"
                            data-type="false">
                            <strong>
                              39 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_40" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:30786/wormy" data-room="40sg"
                            data-type="false">
                            <strong>
                              40 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_41" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31084/wormy" data-room="41sg"
                            data-type="false">
                            <strong>
                              41 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_42" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31091/wormy" data-room="42sg"
                            data-type="false">
                            <strong>
                              42 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_43" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31163/wormy" data-room="43sg"
                            data-type="false">
                            <strong>
                              43 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_44" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31230/wormy" data-room="44sg"
                            data-type="false">
                            <strong>
                              44 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_45" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32584/wormy" data-room="45sg"
                            data-type="false">
                            <strong>
                              45 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_46" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31908/wormy" data-room="46sg"
                            data-type="false">
                            <strong>
                              46 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_47" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32405/wormy" data-room="47sg"
                            data-type="false">
                            <strong>
                              47 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_48" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32577/wormy" data-room="48sg"
                            data-type="false">
                            <strong>
                              48 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_49" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32356/wormy" data-room="49sg"
                            data-type="false">
                            <strong>
                              49 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_50" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31908/wormy" data-room="50sg"
                            data-type="false">
                            <strong>
                              50 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_51" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:32405/wormy" data-room="51sg"
                            data-type="false">
                            <strong>
                              51 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_52" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://sin-a.wormate.io:31230/wormy" data-room="52sg"
                            data-type="false">
                            <strong>
                              52 &nbsp;WWC
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs7" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:31091/wormy" data-room="1jp"
                            data-type="false">
                            <strong>
                              01 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:30171/wormy" data-room="2jp"
                            data-type="false">
                            <strong>
                              02 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:32499/wormy" data-room="3jp"
                            data-type="false">
                            <strong>
                              03 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:30392/wormy" data-room="4jp"
                            data-type="false">
                            <strong>
                              04 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:31859/wormy" data-room="5jp"
                            data-type="false">
                            <strong>
                              05 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:30786/wormy" data-room="6jp"
                            data-type="false">
                            <strong>
                              06 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io/team/jummee-gaming/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:31770/wormy" data-room="7jp"
                            data-type="false">
                            <strong>
                              07 &nbsp;WWC - NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="&#39;wss://tok-b.wormate.io:32111/wormy" data-room="8jp"
                            data-type="false">
                            <strong>
                              08 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://tok-b.wormate.io:32091/wormy" data-room="9jp"
                            data-type="false">
                            <strong>
                              09 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs8" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://syd-a.wormate.io:31342/wormy" data-room="1au"
                            data-type="false">
                            <strong>
                              01 &nbsp;SRTIRAQTIK
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SRTIRAQTIK.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://syd-a.wormate.io:31238/wormy" data-room="2au"
                            data-type="false">
                            <strong>
                              02 &nbsp;NEWS
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://syd-a.wormate.io:30311/wormy" data-room="3au"
                            data-type="false">
                            <strong>
                              03 &nbsp;Yaznملك المستودع🇵🇸
                            </strong>
                          </div>
                          <a href="https://youtube.com/channel/UChge6sUaT7xwtKmjD9hyjfA" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_YAZN.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://syd-a.wormate.io:30154/wormy" data-room="4au"
                            data-type="false">
                            <strong>
                              04 &nbsp;WORMWORLD
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://syd-a.wormate.io:31238/wormy" data-room="5au"
                            data-type="false">
                            <strong>
                              05 &nbsp;INDIA NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:32238/wormy" data-room="6au"
                            data-type="false">
                            <strong>
                              06 &nbsp;INDIA 1
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:30165/wormy" data-room="7au"
                            data-type="false">
                            <strong>
                              07 &nbsp;INDIA 2
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:30407/wormy" data-room="8au"
                            data-type="false">
                            <strong>
                              08 &nbsp;INDIA 3
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:31211/wormy" data-room="9au"
                            data-type="false">
                            <strong>
                              09 &nbsp;INDIA 4
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:32212/wormy" data-room="10au"
                            data-type="false">
                            <strong>
                              10 &nbsp;INDIA 5
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://mum-a.wormate.io:32053/wormy" data-room="11au"
                            data-type="false">
                            <strong>
                              11 &nbsp;INDIA 6
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
        <div class="tab-pane" id="tabs9" style="display: none">
          
            
                
                      
                        <div id="wwc_room_item_1" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="1ae"
                            data-type="false">
                            <strong>
                              01 &nbsp;FIRE@YT🔥
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@pindi__gaming?_t=ZS-8vkfCZjWmDo&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_FIRE.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_2" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="2ae"
                            data-type="false">
                            <strong>
                              02 &nbsp;ABOARQAN
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@aboarqan?_t=8rVSBGscPqS&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ABOARQAN (2).png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_3" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:31353/wormy" data-room="3ae"
                            data-type="false">
                            <strong>
                              03 &nbsp;༄●⃝ᶫꪜᴳᴬᴹᴵᴺᴳ×͜ㅤ❼❼
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@lv.gaming.77?_t=ZS-8wNtZuzVAaG&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_77.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_4" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:31353/wormy" data-room="4ae"
                            data-type="false">
                            <strong>
                              04 &nbsp;QASIM GAMING
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@qasimgamingfb2.0?_t=8lAYlftxJAx&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_QASIM.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_5" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:32650/wormy" data-room="5ae"
                            data-type="false">
                            <strong>
                              05 &nbsp;COLL@YT🥶
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@pindigamingi?_t=8qNR0b929dI&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_COLLY.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_6" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:31975/wormy" data-room="6ae"
                            data-type="false">
                            <strong>
                              06 &nbsp;SHERAZ
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@sheraz__saeed?_t=ZS-8vih1QZdmWG&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SHERAZ.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_7" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="7ae"
                            data-type="false">
                            <strong>
                              07 &nbsp;JOGOS ALI
                            </strong>
                          </div>
                          <a href="https://youtube.com/@aligaming_wormateio?si=FqyjYm8V0E24OYcR" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ALIGAMER.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_8" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:31975/wormy" data-room="8ae"
                            data-type="false">
                            <strong>
                              08 &nbsp;AFG 💀AZIZI 💀YT
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@azizigaming8" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_AZIZI.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_9" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:31975/wormy" data-room="9ae"
                            data-type="false">
                            <strong>
                              09 &nbsp;ABDULLAH GMG⁷⁷
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@thegamer2003ab?_t=ZS-8tnhXuyPF8Z&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_ABDULLA.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_10" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:31353/wormy" data-room="10ae"
                            data-type="false">
                            <strong>
                              10 &nbsp;VEGETA
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/AliWarisVegeetaGaming/" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_VEGETA05.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_11" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="11ae"
                            data-type="false">
                            <strong>
                              11 &nbsp;SAEEDI GAMING
                            </strong>
                          </div>
                          <a href="https://www.facebook.com/gaming/SaeediGaming86" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_SAEEDI.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_12" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="12ae"
                            data-type="false">
                            <strong>
                              12 &nbsp;Khamar77👉✌️🇵🇰
                            </strong>
                          </div>
                          <a href="https://www.tiktok.com/@khamar.77.gaming?_t=ZS-8t7qUZIEaiA&amp;_r=1" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/TEAM_khamar.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_13" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30140/wormy" data-room="13ae"
                            data-type="false">
                            <strong>
                              13 &nbsp;NEW
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_14" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:30573/wormy" data-room="14ae"
                            data-type="false">
                            <strong>
                              14 &nbsp;WWC- UAE- PAKISTAN
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_15" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31091/wormy" data-room="15ae"
                            data-type="false">
                            <strong>
                              15 &nbsp;WWC- UAE- PAKISTAN
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_16" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31392/wormy" data-room="16ae"
                            data-type="false">
                            <strong>
                              16 &nbsp;WWC- UAE- PAKISTAN
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_17" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31290/wormy" data-room="17ae"
                            data-type="false">
                            <strong>
                              17 &nbsp;WWC - TIMES
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
            
                
                      
                        <div id="wwc_room_item_18" style="
          display: grid;
          grid-template-columns: 1fr 30px;
          line-height: 28px;
        ">
                          <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px"
                            data-con="wss://fra-c.wormate.io:31555/wormy" data-room="18ae"
                            data-type="false">
                            <strong>
                              18 &nbsp;WWC -TIMES
                            </strong>
                          </div>
                          <a href="https://wormworld.io" target="_blank">
                            <img src="https://asserts.wormworld.io/rooms/favicon128x128.png" style="width: 25px; vertical-align: middle" />
                          </a>
                        </div>
                        
        </div>
        
    </div>
    
</div>
