import { useState } from "react";
import { useEffect } from "react";

const Triolingo = () => {
  const wordStr = `abase  ? to lower; demean; degrade // abate  ? to lessen; to reduce in severity // abbreviate  ? to shorten; reduce // abdicate  ? to give up power or position; to fail to fulfill // abduct  ? kidnap // aberration  ? a deviation from the expected course // abhor  ? to hate; loathe // abide  ? to obey; to put up with; tolerate // abject  ? of the most miserable or contemptible kind // abort  ? to give up unfinished // abridge  ? to shorten; cut down // abrogate  ? to abolish; often by authority // abscond  ? to sneak away and hide // absurd  ? unreasonable; ridiculous // abundant  ? in great numbers // abyss  ? bottomless gulf; something too deep for measurement // accede  ? to agree // accelerate  ? to increase in speed // accentuate  ? to emphasize; to highlight // acclaim  ? enthusiastic applause or approval // accommodating  ? obliging; helpful // accomplish  ? achieve // accost  ? to approach or confront aggressively // acumen  ? keen insight // acute  ? very sharp; severe // adage  ? wise; old saying // adept  ? very skilled // adhere  ? to stick to // adjourn  ? to suspend [a meeting] for a period of time // adjunct  ? a non–essential supplement; something additional;  accessory; // admiring  ? regarding with approval or respect // admonish  ? to reprove; to warn // adorn  ? to decorate // advantageous  ? profitable; helpful // adversary  ? an enemy; an opponent; a foe // adverse  ? unfavorable; bringing harm // affable  ? friendly; easy–going; amiable // affectation  ? artificial behavior // affluent  ? rich; wealthy // aforementioned  ? said or written before // aggrandize  ? to increase or make greater // aggregate  ? to gather; amass;  combine; collection; collective // aghast  ? feeling great horror or dismay; struck by amazement // agility  ? quickness & ease of movement; nimbleness; liveliness // agitate  ? to stir or shake up // agoraphobia  ? an abnormal fear of open or public places // aimless  ? having no purpose // akimbo  ? with hands on hips and elbows extending outward // akin  ? related; similar // alacrity  ? speed; readiness // algid  ? frigid; cold // allay  ? to sooth; assuage // allege  ? to declare without proof // alleviate  ? to relieve; to ease a pain // allure  ? to entice; to attract // aloof  ? detached; reserved; indifferent; distant // altercation  ? an argument; dispute // altruism  ? unselfishness; generosity // altruistic  ? kind // amalgamation  ? a union; a merger // amateur  ? not professional; done for pleasure; unskillful // ambivalent  ? having opposed or mixed feelings or contradictory feelings // amble  ? to stroll; walk // ameliorate  ? to improve; to make better // amend  ? to change; alter slightly // amiable  ? friendly; affable // amorous  ? relating to or showing love // amorphous  ? without shape or borders // amphibian  ? living in both water and on land // analytical  ? intending to understand the nature of something // angular  ? characterized by sharp angles // animosity  ? hatred; hostility // annihilate  ? to destroy entirely // anomaly  ? something that does not fit into the normal order // antechamber  ? a waiting room // antidote  ? substance that counteracts a poison // anxiety  ? an emotional state of fear and uncertainty; uneasiness // aperture  ? an opening; a hole // aphorism  ? a short saying // apiary  ? place where people keep bees // apocalypse  ? total devastation; the end of the world // apparel  ? garb // apparitional  ? ghostly; spectral // apt  ? likely; relevant // aqueous  ? like water; related to water; formed by water // arbitrator  ? one who settles controversy between two sides // ardent  ? passionate // arid  ? extremely dry; very boring // aroma  ? a pleasant odor // arouse  ? to awaken // articulate  ? able to express oneself coherently // artifice  ? skill or ingenuity // ascertain  ? to find out with certainty // aspirant  ? applicant; hopeful // aspire  ? to hope; to have ambition // assail  ? to attack violently // assailable  ? vulnerable // assess  ? to judge; to determine amount or value // assimilate  ? adjust; absorb // assuage  ? to ease; pacify // astound  ? to astonish greatly // astute  ? shrewd; observant; clever // atone  ? to apologize; make amends // atrocious  ? very wicked; very bad // audacious  ? bold; daring; fearless // augment  ? to increase or make larger // austere  ? very bare; bleak; simple // authoritative  ? having authority; commanding // aviary  ? large cage where birds are kept as pets // azure  ? blue // baleful  ? harmful; threatening // banal  ? commonplace; ordinary // banal  ? commonplace & predictable; trite // banish  ? to exile; to drive away // bard  ? a poet; often a singer as well // barrage  ? a curtain of artillery; any prolonged attack // barrier  ? an obstruction; anything that hinders or blocks // barter  ? to exchange goods or property // battery  ? an assault or an array of similar things intended for use together // beguile  ? lure; charm // beguile  ? to deceive // behold  ? to look at; to observe // belligerent  ? contentious; ready to fight; aggressive // benefactor  ? a donor // beneficial  ? helpful // benevolent  ? Kind; good; caring; generous; charitable; well–meaning // benign  ? non–threatening; innocuous // berate  ? to scold severely // bereft  ? without; devoid of // bewildered  ? to confuse hopelessly; to befuddle // biased  ? favoring one side or opinion or another; prejudiced; influenced // bide  ? to wait; or remain in a condition // bile  ? the bitter; greenish fluid secreted by the liver // bilk  ? to cheat; to swindle // bind  ? to tie or fasten // bizarre  ? very odd or unusual // blandish  ? to coax through flattery // bliss  ? great happiness; spiritual joy // bloated  ? swollen; bigger than desired // boisterous  ? loud; energetic; cheerfully noisy // botanist  ? scientist who studies plants // bounty  ? generosity; a generous gift // bourgeois  ? middle class // brand  ? trademark // brash  ? bold; hasty & reckless; insolent; impudent; lacking in sensitivity // bravado  ? pretend courage; feigned confidence // brazen  ? excessively bold; brash // brevity  ? conciseness; briefness // brig  ? a two masted ship; a jail on a ship // browbeat  ? badger; bully // brumal  ? wintry; relating to winter // brusque  ? short; abrupt; dismissive // buffet (n)  ? a spread of food involving choices // buffet (v)  ? to hit or strike // burgeon  ? to come forth; blossom // burnish  ? to polish; to make smooth & shiny // cache  ? a place where food or treasure is hidden // cacophony  ? noise; discordant sound // cadence  ? rhythm // cajole  ? to persuade; to coax; to urge // callous  ? harsh; cold; unfeeling // calumny  ? an attempt to defame another’s reputation // camaraderie  ? cheerful unity among a group // camouflage  ? to disguise; to conceal from the enemy // candid  ? honest; truthful // candor  ? frankness; sincerity // canine  ? relating to dogs; like a dog // cantankerous  ? bad–tempered; quarrelsome; grumpy // canvas  ? a piece of cloth on which an artist paints // capricious  ? fickle; impulsive; unpredictable; subject to whim // captivate  ? to hold the interest of; to gain the attention of // carouse  ? to revel; to party // cascade  ? a small; steep waterfall // casement  ? window // catastrophe  ? any sudden great disaster // cautious  ? careful // cavity  ? a hole // cavort  ? to frolic; leap; prance // celestial  ? of the heavens or the sky // censor  ? to prohibit objectionable material; a person with the authority to prohibit material // chasm  ? a deep crack in the earth's surface; any large break or gap // choleric  ? easily angered;  very angry; easily annoyed // choreographer  ? one who devises dances or ballets // chronic  ? lasting a long time // circulate  ? to pass around; move from place to place // circumscribe  ? to draw a line around; to encircle; to limit narrowly // clarity  ? clearness // classify  ? to organize in groups or categories // cleave  ? split // coalesce  ? to come together; to unite;  combine // collision  ? a crash; a colliding // colossal  ? immense // communicative  ? giving or exchanging information or messages // compassion  ? deep sympathy; pity // compel  ? force // compelling  ? demanding of attention // competent  ? able // competent  ? capable; fit for the task // compulsion  ? force; urge; obligation // conceal  ? to hide; to keep secret // concise  ? condensed; brief; to the point // condone  ? to overlook; to forgive; to allow // confidential  ? secret // conform  ? to follow rules; to obey // congenial  ? friendly; pleasant; agreeable // congregate  ? to gather together // conserve  ? to save; prevent wastage // constrict  ? to make smaller or narrower by squeezing // contemplate  ? to think about intently // contend  ? to compete; to struggle; to argue // contentious  ? quarrelsome; argumentative // contiguous  ? in contact; touching; near; next // contrivance  ? plot // convene  ? to meet; to come together // conventional  ? traditional // copious  ? plentiful; large in quantity // corpulence  ? fatness; obesity // corpulent  ? obese; fat // corral  ? shut within // counsel  ? advice; mutual exchange of ideas // counsel  ? a lawyer or group of lawyers // countenance  ? to favor; to support; a person's face or expressions // couplet  ? two successive rhyming lines of poetry // courier  ? a messenger // critic  ? one who judges // cue  ? a signal; a hint // curvature  ? a curving; being curved // dawdle  ? to waste time; to loiter // deadlock  ? a standstill between equal and opposed forces; an unbreakable tie // dearth  ? scarcity; insufficiency // debilitate  ? to weaken; to enfeeble // debris  ? bits of rubbish and stone // debunk  ? to discredit // decade  ? a period of ten years // decay  ? to spoil; to go bad; to rot // deceit  ? a lie // declaim  ? to speak in a dramatic way // decree  ? an official order or decision // deficient  ? lacking; incomplete; not enough // deft  ? skillful // dehydrate  ? to remove water from // deject  ? to dishearten; to depress // delude  ? to mislead; to deceive // deluge  ? a great flood // demote  ? to reduce to a lower rank // deplore  ? to express strong disapproval // desolate  ? lifeless; empty // desolation  ? misery; isolation // despicable  ? deserving scorn; contemptible // despondent  ? dejected; discouraged // destitute  ? very poor // devastate  ? to lay waste; to destroy; to overwhelm // devotee  ? one strongly devoted to something // devout  ? religious // devout  ? very religious // dexterous  ? skilled in mind or body // diminish  ? to make smaller // dingy  ? not clean or bright; grimy // diplomatic  ? tactful // discerning  ? able to see clearly // disclaim  ? to give up any claim; to repudiate // discord  ? conflict; argument; opposite of harmony // discursive  ? rambling; getting off topic // dismal  ? causing gloom or misery // disputatious  ? found of arguing // disseminate  ? to scatter; to spread // dissipate  ? disperse // divert  ? to turn aside (from a course) // dodo  ? type of bird // doff  ? to take off (one's hat) // dogged  ? stubbornly persevering // dogmatic  ? characterized by assertion of unproved principles; opinionated; stubborn // dormant  ? temporarily inactive; asleep // doze  ? to sleep lightly; to nap // dubious  ? doubtful // dungeon  ? dark underground prison cell // earmark  ? to set aside for special purpose; to identify // ebullient  ? zestfully enthusiastic; boiling or seeming to boil // eccentric  ? unconventional & strange // ecstatic  ? joyful // eddy  ? a wind or river current; a mini whirlpool // effect  ? something brought about by a cause // egress  ? exit // elusive  ? hard to capture or understand // embellish  ? to add details to a statement; to adorn // eminent  ? towering or standing out; prominent // emit  ? to send out // emulate  ? to imitate; to copy; to model oneself after // enact  ? to pass (a bill or law); to represent in a play // encompass  ? to surround; to contain; to include // endorse  ? to show approval // enigma  ? a puzzle; a mystery; a riddle // ensnare  ? to catch as in a trap // entice  ? to tempt; attract; charm // entourage  ? a group of associates or attendants // epoch  ? a period of time in history // era  ? a period of time with a special characteristic // eradicate  ? to erase or get rid of // erode  ? to wear away // errant  ? straying; mistaken // erudite  ? learned; scholarly // essential  ? necessary // etiquette  ? acceptable manners in society // evacuate  ? to leave empty // excavate  ? to dig up // exhilarating  ? exciting; full of high spirits // exotic  ? foreign; strangely beautiful // expanse  ? wide open area // expansive  ? broad and large // expunge  ? to eliminate; to erase // extol  ? praise // extraction  ? the process of taking out by effort; a persons origin or descent // extricate  ? to free // extroverted  ? Turned outward; interested in others rather than oneself // facet  ? an aspect of something // fanatic  ? overly enthusiastic // fatal  ? deadly; destructive // fatigue  ? exhaustion; weariness; extreme tiredness // fauna  ? all the animal life in a particular region or period // felicitous  ? pleasing // ferocious  ? fierce; savage; violently cruel // fervent  ? intense; passionate // fickle  ? inconsistent; not loyal // fictitious  ? untrue; false // fidelity  ? loyalty; faithful devotion // finale  ? the ending // fission  ? process of breaking into parts // fissure  ? crack; split // flagrant  ? outrageous; offensive; deliberately shocking // flaw  ? an imperfection // flippant  ? disrespectful; frivolous; saucy // flounder  ? to stumble; to fall; to sink // flow  ? to move like a liquid; to pour out // fluctuate  ? vary; change // flue  ? shaft; vent // foretell  ? to predict // formidable  ? awesome; difficult to achieve // foundation  ? establishment; basis // founder  ? sink; fail // fragile  ? easily broken; delicate // frequent  ? happening often; to go somewhere often // fund  ? a supply; to offer money or support // fundamental  ? an essential part; basic // fusion  ? process of combining into one // futile  ? lacking purpose // garrulous  ? chatty; talkative // germinate  ? to begin to grow // ghastly  ? frighteningly terrible // glee  ? lively joy // glib  ? articulate but insincere // glistening  ? shining brightly // grave  ? serious // gregarious  ? sociable // grotesque  ? distorted; fantastical; ridiculous; absurd // grovel  ? to apologize profusely; to humble oneself // grudging  ? reluctant // gruesome  ? causing horror; grisly // hallowed  ? holy; sacred // harbinger  ? a sign of things to come; announce: foreshadow or presage // harsh  ? unpleasant; offensive; cruel; severe // hasten  ? to speed up; to hurry // hatch  ? to emerge from the egg; produce a plan; think up: devise or invent // heed  ? to pay attention to // herbivorous  ? feeding mainly on plants & grasses // heterogeneous  ? composed of dissimilar parts // hexagon  ? a plane with six angles and six sides // hibernate  ? to spend the winter sleeping or in a dormant state // hive  ? the home for a bee colony; a teeming multitude // horrid  ? causing horror; very bad; ugly // hovel  ? any small; miserable hut // humid  ? damp; moist // hybrid  ? the offspring of two different species; a composite of mixed origin // ignite  ? to set fire to; to catch fire // illiterate  ? unable to read or write; uneducated // illuminate  ? to light up or make clear // immaculate  ? spotless; tidy; free from blemish; perfectly clean // imminent  ? about to happen; impending // immortal  ? living forever // impasse  ? blocked path; deadlock; dead end // imperceptible  ? unnoticeable; slight // impervious  ? unable to be penetrated or influenced // impious  ? disrespectful; lacking piety or reverence for a god // implicit  ? understood without being directly expressed // imply  ? to express indirectly // inadvertent  ? accidental: without intention; not attentive; heedless // incendiary  ? causes fires; likely to cause violence or strong feelings of anger // incentive  ? a motive; a stimulus // incompetent  ? useless // incredulous  ? skeptical; not disposed or willing to believe; unbelieving // incumbent  ? current; present // indicate  ? to point out // indict  ? to make a formal accusation against // inert  ? without power to move; tending toward inactivity // infectious  ? likely to spread or cause infection // ingenious  ? original; creative; very innovative & clever // ingenuity  ? inventiveness; creativity; cleverness // ingenuous  ? innocent; naive; guileless // inhabit  ? to live in // inhibit  ? to restrain or suppress // innate  ? inborn; natural; possessed at birth; not learned // innocent  ? not guilty; free from sin; harmless // inscribe  ? to write or etch words on or into a surface // insinuate  ? imply; to indirectly suggest // insinuation  ? sly suggestion; hint // insipid  ? unexciting; lacking significance or impact; bland; uninteresting // insolent  ? offensive; rude; insulting; disrespectful // insomnia  ? inability to sleep // insurgency  ? an uprising; a rebellion // intangible  ? incapable of being touched; immaterial // integrate  ? mix // intricate  ? complicated; difficult; complex // inundated  ? flooded // irate  ? very angry // ironic  ? contradictory; inconsistent; humorously sarcastic or mocking // itinerant  ? traveling // jeer  ? laugh or shout rudely or scornfully // jest  ? a joke; to joke // jubilant  ? overly joyful // jubilee  ? a special anniversary // judicious  ? showing good judgment; sensible // kinetic  ? relating to motion // lagoon  ? a salt–water lake by the sea // lament  ? to express grief for; mourn // lapel  ? strip of cloth which is part of the front of a jacket or coat. // lateral  ? at the side // lenient  ? merciful; not severe // lethargic  ? sluggish; weak // limber  ? supple; agile; flexible // limerick  ? amusing poem with 5 lines // ludicrous  ? absurd; ridiculous // lunge  ? a sudden forward movement; a thrust // magnanimous  ? unselfish // malfunction  ? a failure to function normally; a fault // malleable  ? easily changed // mandatory  ? necessary; required // mar  ? To ruin; to disfigure; to spoil // marvel  ? a wonderful thing; to feel wonder // meager  ? scanty in amount // meek  ? quiet and obedient; not protesting // melancholy  ? sadness; state of grief // merge  ? to blend together // meteorologist  ? scientist who studies the weather // meticulous  ? careful; paying attention to details // mimicry  ? imitation; aping // minuscule  ? tiny; very small // misbegotten  ? ill–conceived; illegitimate // monarch  ? a type of butterfly that migrates // mortgage  ? debt on a property // mourn  ? to feel or express sorrow // murky  ? dark; gloomy // mutation  ? a change; a genetic alteration // nauseous  ? causing disgust or nausea (need to puke) // nebulous  ? vague; cloudy // nimble  ? able to move quickly // nomadic  ? moving from place to place // notify  ? to inform // nourishment  ? a source of strength or support; food // novice  ? a beginner // nullify  ? to cancel; invalidate // oath  ? a promise of truth // obese  ? very fat // objective  ? not influenced by the personal opinion; just the facts // obnoxious  ? very unpleasant // obscure  ? relatively unknown; not easily understood // observation  ? watching carefully; noticing things // obsolete  ? no longer in use or useful; out of date // obstacle  ? a hindrance // obstruct  ? to block; to hinder progress or movement // obtuse  ? slow to understand // olfactory  ? related to the sense of smell // ominous  ? threatening; menacing // opportune  ? favorable; well–timed // option  ? choice // opulent  ? wealthy // oratory  ? eloquence // orbit  ? the path of one body in its revolution around another body // orchid  ? a showy flower // ore  ? rock or soil from which metal can be obtained // ostentatious  ? showy; pretentious // overwhelm  ? to exhaust; to defeat // palatable  ? pleasant to the taste; acceptable; welcome // paradox  ? seemingly self–contradictory statement // passive  ? not active; acted upon; not resisting // pedantic  ? formal and uninspired; too concerned with details and rules; // peddle  ? to sell or offer goods for sale // pedestrian  ? a walking person; a commonplace or dull thing or idea // pensive  ? thoughtful // perjury  ? to lie under oath // permissible  ? allowable // persevere  ? to continue despite challenges // petrify  ? to change into a stony mass // phenomenon  ? perceived by the senses; something unusual // piety  ? holiness; religious devotion // pious  ? deeply religious // placate  ? to calm; to pacify // placated  ? pacified // plagiarism  ? The false presentation of someone else's writing as one's own // plausible  ? believable; seemingly acceptable; possible // plight  ? a predicament; an unfortunate or difficult situation // polish  ? burnish // poll  ? a survey of public opinion // pompous  ? full of self–importance // prevail  ? to gain victory // prevalent  ? common // procrastinate  ? to postpone action // procure  ? to obtain by special effort // profound  ? deep; meaningful // prolific  ? plentiful; abundant; intellectually productive // propel  ? to push forward or onwards // prophesy  ? a prediction of future events // pugnacious  ? combative; ready for a fight // pungent  ? strong or sharp smelling // pursue  ? to follow or chase; to try to catch or attain // quarry  ? mine (as in i worked in a mine) // quell  ? to quiet; to suppress // quench  ? to satisfy (a thirst); to extinguish (a fire) // quiver  ? to shake or vibrate with a rapid motion // quiver  ? something that holds arrows // recalcitrant  ? disobedient // reminiscence  ? a memory; the act of recalling the past // reproachful  ? critical; stern // residual  ? remaining; leftover // sarcastic  ? the use of witty language used to insult or show displeasure // scholarly  ? learned // scull  ? racing boat // skit  ? short; amusing play // speculate  ? wonder; consider // sporadic  ? intermittent; irregular; on and off // sprightly  ? energetic // stature  ? standing // sullied  ? dishonored; violated // surrogate  ? substitute // swag  ? loot; plunder; rob // swath  ? to wrap round or cover with cloth // swathe  ? long strip of cloth; a long strip of land // tenacious  ? holding firmly; especially to a belief; stubborn // threshold  ? doorsill // toil  ? hard work; or to work hard // unique  ? singular // vacillate  ? hesitate // vain  ? conceited // variegated  ? multicolored // vend  ? to sell // vigor  ? strength, energy // wane  ? to decrease in size or strength // ambivalent ? uncertain // exploit ? adventure // fallow ? inactive // turbulent ? volatile // visceral ? instinctive // disdain ? scorn // pragmatic ? practical; rational // dearth ? lack; absence // rival ? competitor // substantiate ? give evidence for // affix ? attach // squall ? a sudden, violent gust of wind // torrent ? rainstorm // suppress ? restrain // conform ? to fit in // vulgar ? low-brow, common, unsophisticated // common ? plentiful or unsophisticated // mystic (n) ? person who has or claims to have magical or spiritual abilites // conventional ? customary // ascertain ? find out // assailable ? vulnerable // assail ? attack // abdicate ? voluntarily give up authority // choleric ? quick to anger // sanguine ? optimistic, hopeful // insipid ? lacking flavor`;

  const wordsArr = wordStr.split(" // ").map((pair) => pair.split(" ? "));
  const [miniArr, setMiniArr] = useState([["", ""]]);
  const [redoArr, setRedoArr] = useState([]);

  const [learning, setLearning] = useState(false);
  const [infoShowing, setInfoShowing] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const [question, setQuestion] = useState(wordsArr[0][0]);
  const [ans1, setAns1] = useState(wordsArr[3][1]);
  const [ans2, setAns2] = useState(wordsArr[4][1]);
  const [ans3, setAns3] = useState(wordsArr[0][1]);
  const [ans4, setAns4] = useState(wordsArr[300][1]);

  const [numAns, setNumAns] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);

  const [correct, setCorrect] = useState(3);
  const [selection, setSelection] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [max, setMax] = useState(20);

  const portfolio_link = "https://rebecca-shoptaw.github.io/";
  const trio_path = "src/assets/trio.png";

  window.onload = () => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
          document.getElementById(e.key)?.click();
          break;
        case "Enter":
          document.getElementById("check")?.click();
          document.getElementById("continue")?.click();
          document.getElementById("try-again")?.click();
          document.getElementById("practice")?.click();
          break;
      }
    });
  };

  useEffect(() => {
    if (!gameOver) {
      setNumAns(0);
      setNumCorrect(0);
      setNumIncorrect(0);
      setMax(20);
      setRedoArr([]);
    }
  }, [gameOver]);

  useEffect(() => {
    nextQ();
    setGameOver(false);
  }, [miniArr]);

  useEffect(() => {
    if (!answered) {
      document.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("selected");
        btn.blur();
      });
      if (selection != 0) {
        document
          .getElementById(selection.toString())
          ?.classList.add("selected");
      }
    }
  }, [selection]);

  const handleStart = () => {
    createFreshArr();
    setLearning(true);
    setInfoShowing(false);
  };

  const createFreshArr = () => {
    const freshArr = [["", ""]];
    let addIndex = 0;
    while (freshArr.length <= 60) {
      addIndex = Math.floor(Math.random() * wordsArr.length);
      if (!freshArr.includes(wordsArr[addIndex])) {
        freshArr.push(wordsArr[addIndex]);
      }
    }
    freshArr.shift();
    setMiniArr(freshArr);
  };

  /*const handleRestart = () => {
    createFreshArr();
    nextQ();
    handleRetry();
  };*/

  const handleRetry = () => {
    setGameOver(false);
  };

  const handleStop = () => {
    setNumAns(0);
    setNumCorrect(0);
    setNumIncorrect(0);
    setGameOver(false);
    setLearning(false);
    setInfoShowing(false);
  };

  const toggleInfo = () => {
    !infoShowing ? setInfoShowing(true) : setInfoShowing(false);
  };

  const validate = () => {
    if (selection != 0) {
      setAnswered(true);
      const curr_correct = numCorrect;
      const curr_incorrect = numIncorrect;
      const curr_ans = numAns;
      //const curr_max = max;
      const btn = document.getElementById(selection.toString());
      if (selection == correct) {
        setNumCorrect(curr_correct + 1);
        btn?.classList.add("correct");
      } else if (selection != correct) {
        /*let newRedo = [];
        if (redoArr.length > 0) {
          newRedo = redoArr;
        }
        newRedo.push([question, ans1, ans2, ans3, ans4, correct]);
        setRedoArr(newRedo);*/
        //setMax(curr_max + 1);
        setNumIncorrect(curr_incorrect + 1);
        btn?.classList.add("incorrect");
      }
      setNumAns(curr_ans + 1);
    }
  };

  const nextQ = () => {
    if (numIncorrect > 3 || numAns == max - 1) {
      setGameOver(true);
    }
    console.log(`max: ${max}, current: ${numAns}`);
    console.log(redoArr);
    setAnswered(false);
    setSelection(0);
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("incorrect");
      btn.classList.remove("correct");
    });
    if (numAns < 20) {
      let setArr = wordsArr;
      if (miniArr.length > 1) {
        setArr = miniArr;
      }
      const answersIndex = [] as number[];
      const questionIndex = Math.floor(Math.random() * setArr.length);
      while (answersIndex.length < 3) {
        const i = Math.floor(Math.random() * setArr.length);
        if (i != questionIndex && !answersIndex.includes(i)) {
          answersIndex.push(i);
        }
      }
      const correctAnsNum = Math.floor(Math.random() * 3) + 1;
      setCorrect(correctAnsNum);

      switch (correctAnsNum) {
        case 1:
          setAns1(setArr[questionIndex][1]);
          setAns2(setArr[answersIndex[0]][1]);
          setAns3(setArr[answersIndex[1]][1]);
          setAns4(setArr[answersIndex[2]][1]);
          break;
        case 2:
          setAns1(setArr[answersIndex[0]][1]);
          setAns2(setArr[questionIndex][1]);
          setAns3(setArr[answersIndex[1]][1]);
          setAns4(setArr[answersIndex[2]][1]);
          break;
        case 3:
          setAns1(setArr[answersIndex[0]][1]);
          setAns2(setArr[answersIndex[1]][1]);
          setAns3(setArr[questionIndex][1]);
          setAns4(setArr[answersIndex[2]][1]);
          break;
        case 4:
          setAns1(setArr[answersIndex[0]][1]);
          setAns2(setArr[answersIndex[1]][1]);
          setAns3(setArr[answersIndex[2]][1]);
          setAns4(setArr[questionIndex][1]);
          break;
      }
      setQuestion(setArr[questionIndex][0]);
    } else {
      const curr_redo = redoArr;
      setQuestion[curr_redo[0][0]];
      setAns1[curr_redo[0][1]];
      setAns2[curr_redo[0][2]];
      setAns3[curr_redo[0][3]];
      setAns4[curr_redo[0][4]];
      setCorrect(curr_redo[0][5]);
      curr_redo.shift();
      setRedoArr(curr_redo);
    }
  };

  return (
    <>
      {!learning && (
        <div id="start-view">
          <div id="header">
            <h1>triolingo</h1>
            <a href={portfolio_link}>
              <i className="bi bi-x-lg" />
            </a>
          </div>
          <div id="header-back"></div>
          <div id="page-container" className={`${!loaded ? "hidden" : ""}`}>
            <div className="subject-banner">
              <div className="banner-text">
                <h3>SSAT Practice</h3>
                <p>Practice your skills for the SSAT exam</p>
              </div>
            </div>
            <i
              className="bi bi-card-list lesson-circle left"
              onClick={toggleInfo}
            ></i>
            {infoShowing && (
              <div className="info-box left">
                <h3>SSAT Vocab</h3>
                <p>Practice some new words!</p>
                <button
                  id="practice"
                  onClick={handleStart}
                  className="button gold"
                >
                  PRACTICE
                </button>
              </div>
            )}
            <div className={`trio-box ${!loaded ? "hidden" : ""}`}>
              <img
                className="trio right"
                src={trio_path}
                onLoad={() => setLoaded(true)}
              ></img>
              <div className="circle-shadow"></div>
            </div>
            <div id="footer-main">
              <p>
                DESIGN & CODE BY<br></br>
                <a href={portfolio_link}>REBECCA SHOPTAW</a>
              </p>
            </div>
          </div>
        </div>
      )}
      {learning && gameOver && (
        <div>
          <div id="win" className="result-box">
            {numAns == max - 1 && (
              <div>
                <h1>You did it!</h1>
                <i id="heart-1" className="bi bi-heart-fill"></i>
                <i id="heart-2" className="bi bi-heart-fill"></i>
                <i id="heart-3" className="bi bi-heart-fill"></i>
              </div>
            )}
            {numIncorrect > 3 && <h1>Better luck next time.</h1>}
            <img src={trio_path} className="trio-result" />
            {numAns == max - 1 && <h3>Trio is very proud of you.</h3>}
            {numIncorrect > 3 && <h3> Trio still believes in you.</h3>}
            <button
              id="try-again"
              className="button clickable"
              onClick={handleRetry}
            >
              PRACTICE AGAIN
            </button>
            {numAns == max - 1 && (
              <button
                id="restart"
                className="button new"
                onClick={createFreshArr}
              >
                NEW WORD SET
              </button>
            )}
            <button id="exit" className="button clickable" onClick={handleStop}>
              EXIT
            </button>
          </div>
        </div>
      )}
      {learning && !gameOver && (
        <div id="question-view">
          <div id="question-header">
            <i id="end-lesson" className="bi bi-x-lg" onClick={handleStop}></i>
            <div id="progress-box">
              <img
                id="progress-bar-fill"
                width={`${(numAns + 1) / (max / 100)}%`}
              ></img>
            </div>
            <div id="hearts-box">
              {numIncorrect == 0 && <i className="bi bi-heart-fill"></i>}
              {numIncorrect <= 1 && <i className="bi bi-heart-fill"></i>}
              {numIncorrect <= 2 && <i className="bi bi-heart-fill"></i>}
            </div>
          </div>
          <div id="question-type-1" className="question-box">
            <h2 className="instruction">Select the correct meaning</h2>
            <div className="speaker-box">
              <img className="speaker" src={trio_path} />
              <p className="question">{question}</p>
            </div>
            <div className="ans-box">
              <button
                id="1"
                className={`ans ${
                  answered == true && selection != 1 ? "unselect" : ""
                }`}
                onClick={() => (answered == false ? setSelection(1) : "")}
              >
                <span className="num">1</span>
                <p>{ans1}</p>
              </button>
              <button
                id="2"
                className={`ans ${
                  answered == true && selection != 2 ? "unselect" : ""
                }`}
                onClick={() => (answered == false ? setSelection(2) : "")}
              >
                <span className="num">2</span>
                <p>{ans2}</p>
              </button>
              <button
                id="3"
                className={`ans ${
                  answered == true && selection != 3 ? "unselect" : ""
                }`}
                onClick={() => (answered == false ? setSelection(3) : "")}
              >
                <span className="num">3</span>
                <p>{ans3}</p>
              </button>
              <button
                id="4"
                className={`ans ${
                  answered == true && selection != 4 ? "unselect" : ""
                }`}
                onClick={() => (answered == false ? setSelection(4) : "")}
              >
                <span className="num">4</span>
                <p>{ans4}</p>
              </button>
            </div>
          </div>
          {answered && selection == correct && (
            <div id="correct-result" className="result">
              <h3>Woohoo!</h3>
              <p>Trio is pleased.</p>
            </div>
          )}
          {answered && selection != correct && (
            <div id="incorrect-result" className="result">
              <h3>Nope!</h3>
              <p>The correct answer was choice {correct}.</p>
            </div>
          )}
          <div
            id="footer"
            className={`${
              answered && selection == correct
                ? "correct-foot"
                : answered && selection != correct
                ? "incorrect-foot"
                : ""
            }`}
          >
            {!answered && (
              <button
                id="check"
                className={`button ${
                  selection == 0 ? "deselect" : "clickable"
                }`}
                onClick={validate}
              >
                CHECK
              </button>
            )}
            {answered && (
              <button
                id="continue"
                className={`button ${
                  selection == correct ? "correct" : "incorrect"
                }`}
                onClick={nextQ}
              >
                {numAns == max - 1 || numIncorrect > 3 ? "FINISH" : "CONTINUE"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Triolingo;
