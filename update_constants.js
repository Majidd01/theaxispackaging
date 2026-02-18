
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib/constants.ts');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match each product object in the PRODUCT_CATEGORIES array
    // We look for objects dealing with PRODUCT_CATEGORIES
    // Heuristic: find the array definition, then iterate inside it.

    // Easier approach: replace `slug: "some-slug",` with `metaTitle: "...", metaDescription: "...", slug: "some-slug",`
    // but we need the 'name' field to generate the title.

    // Let's iterate over matches.

    // Regex explanation:
    // name: "(?<name>.*?)"
    // ... (any content until slug)
    // slug: "(?<slug>.*?)"

    const regex = /name:\s*"(.*?)",[\s\S]*?(slug:\s*".*?",)/g;

    const newContent = content.replace(regex, (match, name, slugPart) => {
        if (match.includes('metaTitle:')) return match; // Already updated

        const metaTitle = `${name} | Axis Packaging`;
        const metaDescription = `Custom ${name.toLowerCase()} tailored to your brand. High-quality, sustainable packaging solutions available at Axis Packaging.`;

        // Insert before the slug part
        // We want to keep the indentation of the slug line mostly, or just add new lines.
        // The match includes everything from name... to slug...
        // We can replace the `slug:` part with `meta... slug:`

        return match.replace(slugPart, `metaTitle: "${metaTitle}",\n    metaDescription: "${metaDescription}",\n    ${slugPart}`);
    });

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Successfully updated lib/constants.ts');
} catch (err) {
    console.error('Error updating file:', err);
}
