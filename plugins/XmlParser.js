import parser from 'fast-xml-parser';
import he from 'he';

/**
 * 
 * @param {String} XmlPosts 
 * @returns 
 */
export const XmlParser = (XmlPosts, transformator) => {
    const options = {
        attributeNamePrefix: "@_",
        attrNodeName: "attr",
        textNodeName: "#text",
        ignoreAttributes: true,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: true,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: "__cdata",
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        numParseOptions: {
            hex: true,
            leadingZeros: true,
        },
        arrayMode: false,
        attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),
        tagValueProcessor: (val, tagName) => he.decode(val),
        stopNodes: ["parse-me-as-string"]
    };


    if (parser.validate(XmlPosts) === true) {
        let posts = [];
        const jsonObj = parser.parse(XmlPosts, options);

        jsonObj.rss.channel.item.forEach(item => {
            posts.push(item)
        });

        posts = transformator(posts)
        return posts
    }
    // console.log(XmlPosts);
    // const parser = new DOMParser();
    // xml.push(parser.parseFromString(getPosts, "application/xml"))
    // const xmlParser = (elem) => {
    //     const posts = [];
    //     elem.childNodes.forEach(node => {
    //         if (node.nodeName.match(/^i/)) {
    //             const obj = {};
    //             node.childNodes.forEach(node => {
    //                 if (node.nodeName === 'enclosure') {
    //                     obj['enclosure'] = node.getAttribute('url');
    //                 } else {
    //                     obj[node.nodeName] = node.textContent;
    //                 }
    //             })
    //             posts.push(obj)
    //         } else {
    //             xmlParser(node)
    //         }
    //     })
    //     return posts
    // }
    // xml.forEach(item => {
    //     xmlParser(item)
    // })
}