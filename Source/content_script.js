walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "Your Butt");
	v = v.replace(/\bThe cloud\b/g, "Your butt");
	v = v.replace(/\bthe Cloud\b/g, "your Butt");
	v = v.replace(/\bthe cloud\b/g, "your butt");
	v = v.replace(/\bcloud\b/g, "butt");
	v = v.replace(/\bCloud\b/g, "Butt");
	v = v.replace(/\bclouds\b/g, "butts");
	v = v.replace(/\bClouds\b/g, "Butts")
	v = v.replace(/\bdata\b/g, "poop");
	v = v.replace(/\bData\b/g, "Poop")
	v = v.replace(/!/g, "! (that's what she said)");
	
	
	textNode.nodeValue = v;
}


