export const getQueryStringParams = (url) => {
    const urlArr = url.split('?');
    let query = urlArr[1] || '';
    query = query.replace('?', '');

    let queryArr = query.split('&');
    const queryParams = [];

    queryArr.forEach((thisParam) => {
        let thisParamArr = thisParam.split('=');
        if (thisParamArr.length === 2) {
            queryParams.push({name: thisParamArr[0], value: thisParamArr[1]});
        }
    });

    console.log('QUERY STRING PARAMS: ', queryParams);
    return queryParams;
};

export const createUrl = (queryParams) => {
    const queryStringArray = [];

    for (const entry of queryParams) {
        const encodedKey = entry.name;
        const encodedValue = entry.value;
        queryStringArray.push(`${encodedKey}=${encodedValue}`);
    }

    const queryString = queryStringArray.join('&');
    return queryString;
};

export const getLabel = (value) => {
    let label = value;
    if (value.toLowerCase() == 'sent-to-sr') {
        label = 'Publishing soon on Stanford Report';
    } else if (value == 'published') {
        label = 'Published on Stanford Report';
    } else if (value == '') {
        label = 'All';
    } else {
        label = value[0].toUpperCase() + value.substring(1);
    }
    return label;
};

export const decodeHTML = (string) => {
    const entityMap = HtmlEntities;
    for (let key in entityMap) {
        let entity = entityMap[key];
        let regex = new RegExp(entity, 'g');
        string = string.replace(regex, key);
    }
    string = string.replace(/&quot;/g, '"');
    string = string.replace(/&amp;/g, '&');
    string = string.replace(' [...]', '...');
    string = string.replace(' […]', '...');
    string = string.replace(/(<([^>]+)>)/gi, '');
    return string;
};

const HtmlEntities = {
    "'": '&apos;',
    '<': '&lt;',
    '>': '&gt;',
    ' ': '&nbsp;',
    '¡': '&iexcl;',
    '¢': '&cent;',
    '£': '&pound;',
    '¤': '&curren;',
    '¥': '&yen;',
    '¦': '&brvbar;',
    '§': '&sect;',
    '¨': '&uml;',
    '©': '&copy;',
    ª: '&ordf;',
    '«': '&laquo;',
    '¬': '&not;',
    '®': '&reg;',
    '¯': '&macr;',
    '°': '&deg;',
    '±': '&plusmn;',
    '²': '&sup2;',
    '³': '&sup3;',
    '´': '&acute;',
    µ: '&micro;',
    '¶': '&para;',
    '·': '&middot;',
    '¸': '&cedil;',
    '¹': '&sup1;',
    º: '&ordm;',
    '»': '&raquo;',
    '¼': '&frac14;',
    '½': '&frac12;',
    '¾': '&frac34;',
    '¿': '&iquest;',
    À: '&Agrave;',
    Á: '&Aacute;',
    Â: '&Acirc;',
    Ã: '&Atilde;',
    Ä: '&Auml;',
    Å: '&Aring;',
    Æ: '&AElig;',
    Ç: '&Ccedil;',
    È: '&Egrave;',
    É: '&Eacute;',
    Ê: '&Ecirc;',
    Ë: '&Euml;',
    Ì: '&Igrave;',
    Í: '&Iacute;',
    Î: '&Icirc;',
    Ï: '&Iuml;',
    Ð: '&ETH;',
    Ñ: '&Ntilde;',
    Ò: '&Ograve;',
    Ó: '&Oacute;',
    Ô: '&Ocirc;',
    Õ: '&Otilde;',
    Ö: '&Ouml;',
    '×': '&times;',
    Ø: '&Oslash;',
    Ù: '&Ugrave;',
    Ú: '&Uacute;',
    Û: '&Ucirc;',
    Ü: '&Uuml;',
    Ý: '&Yacute;',
    Þ: '&THORN;',
    ß: '&szlig;',
    à: '&agrave;',
    á: '&aacute;',
    â: '&acirc;',
    ã: '&atilde;',
    ä: '&auml;',
    å: '&aring;',
    æ: '&aelig;',
    ç: '&ccedil;',
    è: '&egrave;',
    é: '&eacute;',
    ê: '&ecirc;',
    ë: '&euml;',
    ì: '&igrave;',
    í: '&iacute;',
    î: '&icirc;',
    ï: '&iuml;',
    ð: '&eth;',
    ñ: '&ntilde;',
    ò: '&ograve;',
    ó: '&oacute;',
    ô: '&ocirc;',
    õ: '&otilde;',
    ö: '&ouml;',
    '÷': '&divide;',
    ø: '&oslash;',
    ù: '&ugrave;',
    ú: '&uacute;',
    û: '&ucirc;',
    ü: '&uuml;',
    ý: '&yacute;',
    þ: '&thorn;',
    ÿ: '&yuml;',
    Œ: '&OElig;',
    œ: '&oelig;',
    Š: '&Scaron;',
    š: '&scaron;',
    Ÿ: '&Yuml;',
    ƒ: '&fnof;',
    ˆ: '&circ;',
    '˜': '&tilde;',
    Α: '&Alpha;',
    Β: '&Beta;',
    Γ: '&Gamma;',
    Δ: '&Delta;',
    Ε: '&Epsilon;',
    Ζ: '&Zeta;',
    Η: '&Eta;',
    Θ: '&Theta;',
    Ι: '&Iota;',
    Κ: '&Kappa;',
    Λ: '&Lambda;',
    Μ: '&Mu;',
    Ν: '&Nu;',
    Ξ: '&Xi;',
    Ο: '&Omicron;',
    Π: '&Pi;',
    Ρ: '&Rho;',
    Σ: '&Sigma;',
    Τ: '&Tau;',
    Υ: '&Upsilon;',
    Φ: '&Phi;',
    Χ: '&Chi;',
    Ψ: '&Psi;',
    Ω: '&Omega;',
    α: '&alpha;',
    β: '&beta;',
    γ: '&gamma;',
    δ: '&delta;',
    ε: '&epsilon;',
    ζ: '&zeta;',
    η: '&eta;',
    θ: '&theta;',
    ι: '&iota;',
    κ: '&kappa;',
    λ: '&lambda;',
    μ: '&mu;',
    ν: '&nu;',
    ξ: '&xi;',
    ο: '&omicron;',
    π: '&pi;',
    ρ: '&rho;',
    ς: '&sigmaf;',
    σ: '&sigma;',
    τ: '&tau;',
    υ: '&upsilon;',
    φ: '&phi;',
    χ: '&chi;',
    ψ: '&psi;',
    ω: '&omega;',
    ϑ: '&thetasym;',
    ϒ: '&Upsih;',
    ϖ: '&piv;',
    '–': '&ndash;',
    '—': '&mdash;',
    '‘': '&lsquo;',
    '’': '&rsquo;',
    '‚': '&sbquo;',
    '“': '&ldquo;',
    '”': '&rdquo;',
    '„': '&bdquo;',
    '†': '&dagger;',
    '‡': '&Dagger;',
    '•': '&bull;',
    '…': '&hellip;',
    '‰': '&permil;',
    '′': '&prime;',
    '″': '&Prime;',
    '‹': '&lsaquo;',
    '›': '&rsaquo;',
    '‾': '&oline;',
    '⁄': '&frasl;',
    '€': '&euro;',
    ℑ: '&image;',
    '℘': '&weierp;',
    ℜ: '&real;',
    '™': '&trade;',
    ℵ: '&alefsym;',
    '←': '&larr;',
    '↑': '&uarr;',
    '→': '&rarr;',
    '↓': '&darr;',
    '↔': '&harr;',
    '↵': '&crarr;',
    '⇐': '&lArr;',
    '⇑': '&UArr;',
    '⇒': '&rArr;',
    '⇓': '&dArr;',
    '⇔': '&hArr;',
    '∀': '&forall;',
    '∂': '&part;',
    '∃': '&exist;',
    '∅': '&empty;',
    '∇': '&nabla;',
    '∈': '&isin;',
    '∉': '&notin;',
    '∋': '&ni;',
    '∏': '&prod;',
    '∑': '&sum;',
    '−': '&minus;',
    '∗': '&lowast;',
    '√': '&radic;',
    '∝': '&prop;',
    '∞': '&infin;',
    '∠': '&ang;',
    '∧': '&and;',
    '∨': '&or;',
    '∩': '&cap;',
    '∪': '&cup;',
    '∫': '&int;',
    '∴': '&there4;',
    '∼': '&sim;',
    '≅': '&cong;',
    '≈': '&asymp;',
    '≠': '&ne;',
    '≡': '&equiv;',
    '≤': '&le;',
    '≥': '&ge;',
    '⊂': '&sub;',
    '⊃': '&sup;',
    '⊄': '&nsub;',
    '⊆': '&sube;',
    '⊇': '&supe;',
    '⊕': '&oplus;',
    '⊗': '&otimes;',
    '⊥': '&perp;',
    '⋅': '&sdot;',
    '⌈': '&lceil;',
    '⌉': '&rceil;',
    '⌊': '&lfloor;',
    '⌋': '&rfloor;',
    '⟨': '&lang;',
    '⟩': '&rang;',
    '◊': '&loz;',
    '♠': '&spades;',
    '♣': '&clubs;',
    '♥': '&hearts;',
    '♦': '&diams;',
};
