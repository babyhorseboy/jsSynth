var wave;
var dropdown;
var ampSlider; 
var freqSlider;
var currentSelect;
var quantizedNote; 
var midiNote;

function setup()
{
    createCanvas(400, 400);

    dropdown = createSelect();
    dropdown.position(160, 200);
    dropdown.option("sine"); 
    dropdown.option("triangle"); 
    dropdown.option("sawtooth"); 
    dropdown.option("square"); 
    currentSelect = dropdown.value(); 

    ampSlider = createSlider(0, 1, 0.5, 0.01);
    freqSlider = createSlider(262, 523, 262, 1);
    ampSlider.position(100, 400);
    freqSlider.position(300, 400);

    wave = new p5.Oscillator(); 
    wave.start(); 

    wave.setType(dropdown.value());
    
}

function draw()
{
    wave.amp(ampSlider.value());
    midiNote = freqToMidi(freqSlider.value()); 
    quantizedNote = quantize(midiNote);
    var frequency = midiToFreq(quantizedNote);
    wave.freq(frequency);

    if (!(currentSelect == dropdown.value()))
    {
        wave.setType(dropdown.value());
        currentSelect = dropdown.value();
    }
    
    background(200);
    
}

function quantize(midiNote)
{

    switch (midiNote)
    {
        case 60:
            break;
        case 61: 
            midiNote = 60;
            break;
        case 62: 
            break;
        case 63: 
            midiNote = 62;
            break;
        case 64: 
            break;
        case 65: 
            break;
        case 66:
            midiNote = 65; 
            break; 
        case 67: 
            break;
        case 68: 
            midiNote = 67; 
            break; 
        case 69: 
            break; 
        case 70: 
            midiNote = 69; 
            break;
        case 71: 
            break;
        case 72:
            break; 
    }
    
    return midiNote; 
}
