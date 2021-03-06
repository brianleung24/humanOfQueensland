/**
 * Created by kinngaileung on 16/10/2015.
 */
//an object store all polygon objects
var mapList = {
red :{
    color:'#EAB7CC',
    hoverColor:'#EAB7CC',
    name:"South East QLD",
    postName:"southEastQueensland",
    markerLocation:{lat:-28.782066,lng: 152.185577},
    polygon:[
        {lat: -26.468024, lng: 152.058734},
        {lat: -26.605628, lng: 151.992816},
        {lat: -26.747973, lng: 151.948871},
        {lat: -26.846038, lng: 151.948871},
        {lat: -26.899937, lng: 151.817035},
        {lat: -27.041913, lng: 151.806049},
        {lat: -27.213024, lng: 152.025775},
        {lat: -27.374117, lng: 152.069721},
        {lat: -27.452138, lng: 151.965350},
        {lat: -27.564197, lng: 151.943378},
        {lat: -27.979671, lng: 151.956824},
        {lat: -28.105725, lng: 152.055701},
        {lat: -28.299366, lng: 151.978797},
        {lat: -28.473343, lng: 151.846961},
        {lat: -28.733770, lng: 151.660193},
        {lat: -28.897411, lng: 151.374549},
        {lat: -28.945492, lng: 151.275672},
        {lat: -29.175969, lng: 151.297644},
        {lat: -29.022375, lng: 151.528357},
        {lat: -28.858931, lng: 151.671179},
        {lat: -29.012768, lng: 151.792029},
        {lat: -28.887793, lng: 151.890906},
        {lat: -28.858931, lng: 152.066687},
        {lat: -28.637391, lng: 152.066687},
        {lat: -28.502311, lng: 151.956824},
        {lat: -28.338052, lng: 152.341345},
        {lat: -28.280018, lng: 152.561072},
        {lat: -28.328382, lng: 152.714881},
        {lat: -28.328382, lng: 153.121375},
        {lat: -28.241311, lng: 153.418006},
        {lat: -28.192907, lng: 153.538855},
        {lat: -27.834040, lng: 153.407019},
        {lat: -27.376466, lng: 153.648719},
        {lat: -27.382563, lng: 153.439978},
        {lat: -27.234305, lng: 153.438605},
        {lat: -27.072092, lng: 153.484610},
        {lat: -27.080957, lng: 153.530615},
        {lat: -26.975141, lng: 153.418006},
        {lat: -27.042129, lng: 153.358954},
        {lat: -27.035707, lng: 153.222998},
        {lat: -26.936582, lng: 153.162573},
        {lat: -26.723353, lng: 153.169440},
        {lat: -26.494976, lng: 153.102149},
        {lat: -26.509724, lng: 152.665442},
        {lat: -26.426128, lng: 152.269934},
        {lat: -26.468024, lng: 152.058734}
    ]},
yellow: {
    color:'#F8F1BB',
    hoverColor:'#F8F1BB',
    name:" Darling downs south west",
    postName:" darlingDownsSouthWest",
    markerLocation:{lat:-28.801322,lng: 145.176300},
    polygon:[
    {lat: -28.936054, lng: 151.281539},
    {lat: -28.652031, lng: 150.822860},
    {lat: -28.632747, lng: 150.493270},
    {lat: -28.478349, lng: 150.207625},
    {lat: -28.555576, lng: 149.724227},
    {lat: -28.671311, lng: 149.328719},
    {lat: -28.902397, lng: 148.955184},
    {lat: -28.979312, lng: 148.691512},
    {lat: -28.960089, lng: 140.957137},
    {lat: -27.000408, lng: 140.979110},
    {lat: -27.117813, lng: 145.922957},
    {lat: -25.819672, lng: 146.560164},
    {lat: -26.135714, lng: 147.263289},
    {lat: -25.903703, lng: 148.559676},
    {lat: -25.896291, lng: 149.389144},
    {lat: -25.764030, lng: 149.840957},
    {lat: -25.708362, lng: 150.243331},
    {lat: -25.358919, lng: 151.149703},
    {lat: -25.542441, lng: 151.267806},
    {lat: -25.898762, lng: 151.152450},
    {lat: -26.056783, lng: 151.240340},
    {lat: -26.197341, lng: 151.328231},
    {lat: -26.377107, lng: 151.152450},
    {lat: -26.470573, lng: 151.108504},
    {lat: -26.544309, lng: 151.067306},
    {lat: -26.544309, lng: 151.081038},
    {lat: -26.539394, lng: 151.303512},
    {lat: -26.541851, lng: 151.564437},
    {lat: -26.556593, lng: 151.825362},
    {lat: -26.490240, lng: 152.042342},
    {lat: -26.836325, lng: 151.937972},
    {lat: -26.901252, lng: 151.815749},
    {lat: -27.054234, lng: 151.803390},
    {lat: -27.221662, lng: 152.023116},
    {lat: -27.364450, lng: 152.061568},
    {lat: -27.535065, lng: 151.931106},
    {lat: -27.780772, lng: 151.937972},
    {lat: -27.974998, lng: 151.937972},
    {lat: -28.101058, lng: 152.042342},
    {lat: -28.278987, lng: 151.979171},
    {lat: -28.480763, lng: 151.839095},
    {lat: -28.725518, lng: 151.649581},
    {lat: -28.833245, lng: 151.477920},
    {lat: -28.936054, lng: 151.281539}
    ]},
green : {color:'#D9E8D1',
    hoverColor:'#D9E8D1',
    name:"Central QLD",
    postName:"centralQueensland",
    markerLocation:{lat:-25.208938, lng:149.836764},
    polygon:[
    {lat: -25.098042, lng: 152.215576},
    {lat: -25.356443, lng: 151.127930},
    {lat: -25.535013, lng: 150.743408},
    {lat: -25.713318, lng: 150.238037},
    {lat: -25.762799, lng: 149.842529},
    {lat: -25.891356, lng: 149.381104},
    {lat: -25.901239, lng: 148.557129},
    {lat: -26.120930, lng: 147.282715},
    {lat: -25.844405, lng: 146.557617},
    {lat: -25.289417, lng: 146.601563},
    {lat: -24.881465, lng: 146.354370},
    {lat: -24.512154, lng: 145.744629},
    {lat: -24.392142, lng: 145.393066},
    {lat: -23.548893, lng: 145.261230},
    {lat: -22.679928, lng: 145.151367},
    {lat: -22.776194, lng: 147.634277},
    {lat: -23.094904, lng: 147.941895},
    {lat: -23.188350, lng: 148.051758},
    {lat: -23.322092, lng: 148.095703},
    {lat: -23.548893, lng: 148.161621},
    {lat: -23.609308, lng: 148.513184},
    {lat: -23.589173, lng: 148.930664},
    {lat: -23.619374, lng: 149.282227},
    {lat: -23.750166, lng: 149.611816},
    {lat: -23.775304, lng: 149.831543},
    {lat: -23.649568, lng: 150.117188},
    {lat: -23.541339, lng: 150.236664},
    {lat: -23.473336, lng: 150.356140},
    {lat: -23.337224, lng: 150.617065},
    {lat: -23.253976, lng: 150.663757},
    {lat: -23.140372, lng: 150.770874},
    {lat: -23.589173, lng: 150.908203},
    {lat: -23.427981, lng: 151.018066},
    {lat: -23.498527, lng: 151.251526},
    {lat: -23.689817, lng: 151.320190},
    {lat: -24.031426, lng: 151.545410},
    {lat: -23.951129, lng: 151.721191},
    {lat: -24.272017, lng: 151.962891},
    {lat: -24.527147, lng: 152.045288},
    {lat: -24.751832, lng: 152.336426},
    {lat: -25.098042, lng: 152.215576}
    ]},
black : {color:'#B8B3A8',
    hoverColor:'#B8B3A8',
    name:"Wide Bay Burnett",
    postName:"wideBayBurnett",
    markerLocation:{lat:-26.288471, lng:152.347269},
    polygon:[
    {lat: -25.353955, lng: 151.160889},
    {lat: -25.542441, lng: 151.281738},
    {lat: -25.908644, lng: 151.160889},
    {lat: -26.194877, lng: 151.325684},
    {lat: -26.382028, lng: 151.160889},
    {lat: -26.529565, lng: 151.072998},
    {lat: -26.549223, lng: 151.809082},
    {lat: -26.421390, lng: 152.259521},
    {lat: -26.504989, lng: 152.660522},
    {lat: -26.495157, lng: 153.061523},
    {lat: -26.061718, lng: 153.143921},
    {lat: -25.671236, lng: 153.061523},
    {lat: -24.966140, lng: 153.402100},
    {lat: -24.676970, lng: 153.176880},
    {lat: -24.800448, lng: 153.108215},
    {lat: -24.963650, lng: 153.204346},
    {lat: -25.239727, lng: 152.957153},
    {lat: -25.204941, lng: 152.671509},
    {lat: -24.871486, lng: 152.501221},
    {lat: -24.736854, lng: 152.319946},
    {lat: -25.100523, lng: 152.215576},
    {lat: -25.353955, lng: 151.160889}
    ]},
blue: {color:'#C0CFE3',
    hoverColor:'#C0CFE3',
    name:"Far north QLD",
    postName:"farNorthQueensland",
    markerLocation:{lat: -17.697150,lng: 143.293160},
    polygon:[
    {lat: -16.573023, lng: 137.988281},
    {lat: -19.921713, lng: 137.988281},
    {lat: -20.267350, lng: 139.147339},
    {lat: -20.776659, lng: 140.097656},
    {lat: -20.617361, lng: 141.119385},
    {lat: -20.838278, lng: 143.854980},
    {lat: -20.797201, lng: 144.986572},
    {lat: -20.161677, lng: 146.126404},
    {lat: -19.930750, lng: 146.542511},
    {lat: -19.699486, lng: 146.848755},
    {lat: -19.145168, lng: 146.821289},
    {lat: -19.130897, lng: 146.586456},
    {lat: -18.950454, lng: 146.395569},
    {lat: -18.816618, lng: 146.331024},
    {lat: -18.526492, lng: 146.387329},
    {lat: -18.205871, lng: 146.046753},
    {lat: -17.914716, lng: 146.096191},
    {lat: -17.778766, lng: 146.167603},
    {lat: -17.387337, lng: 146.059113},
    {lat: -16.872890, lng: 145.980835},
    {lat: -16.576971, lng: 145.556488},
    {lat: -15.995655, lng: 145.494690},
    {lat: -15.492062, lng: 145.295563},
    {lat: -14.987240, lng: 145.415039},
    {lat: -14.588900, lng: 144.942627},
    {lat: -14.093957, lng: 144.580078},
    {lat: -14.392118, lng: 143.854980},
    {lat: -12.592094, lng: 143.503418},
    {lat: -11.957380, lng: 143.311157},
    {lat: -11.784014, lng: 142.921143},
    {lat: -10.919618, lng: 142.734375},
    {lat: -10.487812, lng: 142.382813},
    {lat: -10.790141, lng: 142.053223},
    {lat: -11.582288, lng: 142.003784},
    {lat: -12.232655, lng: 141.591797},
    {lat: -13.923404, lng: 141.350098},
    {lat: -15.262989, lng: 141.525879},
    {lat: -17.392579, lng: 140.712891},
    {lat: -17.565484, lng: 140.086670},
    {lat: -17.266728, lng: 139.548340},
    {lat: -16.699340, lng: 138.845215},
    {lat: -16.573023, lng: 137.988281}
    ]},
purple: {color:'#CCBFCF',
    hoverColor:'#CCBFCF',
    name:"Far west QLD",
    postName:"farWestQueensland",
    markerLocation:{lat:-25.798329, lng:142.096702},
    polygon:[
    {lat: -27.000422, lng: 140.998535},
    {lat: -27.083597, lng: 145.942383},
    {lat: -26.298354, lng: 146.293945},
    {lat: -25.725698, lng: 146.535645},
    {lat: -25.552368, lng: 146.541138},
    {lat: -25.368860, lng: 146.579590},
    {lat: -25.192530, lng: 146.519165},
    {lat: -25.015943, lng: 146.414795},
    {lat: -24.856549, lng: 146.304932},
    {lat: -24.632053, lng: 145.920410},
    {lat: -24.392145, lng: 145.365601},
    {lat: -22.684999, lng: 145.134888},
    {lat: -22.436432, lng: 138.004761},
    {lat: -25.982751, lng: 137.988281},
    {lat: -25.977813, lng: 141.004028},
    {lat: -26.507461, lng: 141.004028},
    {lat: -27.000422, lng: 140.998535}
]},
orange :{color:'#DBD0C6',
    hoverColor:'#DBD0C6',
    name:"Whitsunday",
    postName:"whitsunday",
    markerLocation:{lat:-23.357346,lng: 149.285187},
    polygon: [
    {lat: -22.767810, lng: 147.653334},
    {lat: -23.033470, lng: 147.884047},
    {lat: -23.104225, lng: 148.037856},
    {lat: -23.538040, lng: 148.169692},
    {lat: -23.618593, lng: 148.543227},
    {lat: -23.568253, lng: 149.081557},
    {lat: -23.638723, lng: 149.422133},
    {lat: -23.699096, lng: 149.608901},
    {lat: -23.779550, lng: 149.729750},
    {lat: -23.648787, lng: 150.136245},
    {lat: -23.517894, lng: 150.235122},
    {lat: -23.366701, lng: 150.542739},
    {lat: -23.114329, lng: 150.784438},
    {lat: -22.679141, lng: 150.861342},
    {lat: -22.407713, lng: 150.745986},
    {lat: -22.191714, lng: 150.509780},
    {lat: -22.212058, lng: 150.410903},
    {lat: -22.587879, lng: 150.608657},
    {lat: -22.374700, lng: 150.268081},
    {lat: -22.120488, lng: 150.048354},
    {lat: -22.008490, lng: 149.828627},
    {lat: -22.537152, lng: 149.982436},
    {lat: -22.283237, lng: 149.718764},
    {lat: -22.110310, lng: 149.597915},
    {lat: -21.539176, lng: 149.444106},
    {lat: -21.083717, lng: 149.235366},
    {lat: -21.518736, lng: 148.828872},
    {lat: -21.674516, lng: 148.691542},
    {lat: -21.876013, lng: 148.576186},
    {lat: -21.998304, lng: 148.191665},
    {lat: -22.098223, lng: 148.125747},
    {lat: -22.203158, lng: 148.092788},
    {lat: -22.402635, lng: 147.949965},
    {lat: -22.579003, lng: 147.804396},
    {lat: -22.767810, lng: 147.653334}
]},
pink:{color:'#F2DEE5',
        hoverColor:'#F2DEE5',
        name:"North QLD",
        postName:"northQueensland",
        markerLocation:{lat:-22.380564,lng:144.104565},
        polygon:[
            {lat:-21.085496,lng:149.235170},
            {lat:-21.584374,lng:148.751771},
            {lat:-21.890526,lng:148.554018},
            {lat:-21.992432,lng:148.180482},
            {lat:-22.297708,lng:148.026674},
            {lat:-22.764503,lng:147.653139},
            {lat:-22.438391,lng:137.993045},
            {lat:-19.952122,lng:137.993045},
            {lat:-20.264200,lng:139.031253},
            {lat:-20.356286,lng:139.339557},
            {lat:-20.489487,lng:139.603915},
            {lat:-20.776088,lng:140.149112},
            {lat:-20.601364,lng:141.327395},
            {lat:-20.855674,lng:144.002566},
            {lat:-20.817170,lng:144.980350},
            {lat:-20.531933,lng:145.484347},
            {lat:-20.264200,lng:145.960879},
            {lat:-20.011490,lng:146.416812},
            {lat:-19.853986,lng:146.705203},
            {lat:-19.701496,lng:146.839786},
            {lat:-19.429758,lng:146.859012},
            {lat:-19.298902,lng:146.816440},
            {lat:-19.157564,lng:146.790347},
            {lat:-19.295013,lng:147.413821},
            {lat:-19.574239,lng:147.613131},
            {lat:-19.765886,lng:147.649374},
            {lat:-19.823001,lng:147.751535},
            {lat:-19.694278,lng:147.741625},
            {lat:-19.700491,lng:147.842653},
            {lat:-19.874938,lng:147.909944},
            {lat:-19.865898,lng:148.054140},
            {lat:-19.988549,lng:148.301332},
            {lat:-20.075638,lng:148.301332},
            {lat:-20.142374,lng:148.386476},
            {lat:-19.940791,lng:148.435915},
            {lat:-20.198770,lng:148.681734},
            {lat:-19.974352,lng:148.918626},
            {lat:-20.080153,lng:148.999822},
            {lat:-20.185881,lng:149.020593},
            {lat:-20.314722,lng:149.155519},
            {lat:-20.600365,lng:149.170625},
            {lat:-20.600365,lng:148.922746},
            {lat:-20.497492,lng:148.707826},
            {lat:-20.744270,lng:148.729799},
            {lat:-21.085496,lng:149.235170}

        ]
    }
};