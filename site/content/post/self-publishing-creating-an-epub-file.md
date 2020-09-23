---
title: "Self-Publishing: Creating an EPUB File"
date: 2020-09-06T00:38:00.000Z
description: EPUB files are more universally accepted and an easy way to upload
  to multiple eBook distributers
image: img/epub.jpg
---
**Why Create an EPUB File?**

EPUB files are accepted by the major eBook distributers, including:

\* [Amazon](/post/self-publishing-setting-up-an-amazon-ebook/)

\* [Barnes & Noble](/post/self-publishing-setting-up-a-barnes-noble-ebook/)

\* Kobo

\* [Google Play](/post/self-publishing-setting-up-a-google-play-ebook/)

This means you can use the same EPUB file for each listing if you want to distribute through more than just Amazon KDP.

**What You Need**

My laptop is a Mac, so I use Pages to create my documents (it's essentially the same as Word on a PC). If you are using Pages then creating an EPUB file is extremely easy. The bonus of being on a Mac is that you can then open the EPUB file in Books to ensure the formatting is how you want it.

**Formatting Changes**

In order to get my book to export how I wanted I needed to make the following changes:

**Tabs**

EPUB files don't read tabs, so you need to remove all tabs you have in your book by selecting a tab, copying it (or typing \t into the search bar), and then doing a search/replace and replace those tabs with nothing.

![Replace Tabs](img/epub_replacetabs.jpg "Replace Tabs")

**Indents**

Once your document no longer has tabs you need to select all of the copy for your book (presumably excluding front and back matter) and then set the indent by going to the "Format" view, selecting the "Layout" tab and setting the "First" indent to the value you want - I chose .25 in.

This will set the indent on all of the paragraphs in your document. Since I wanted my first paragraph of each chapter and after all section breaks to have no indent, I had to go back through and set this "First" indent value to 0 for each paragraph I didn't want indented.

![Set Indents](img/epub_indents.jpg "Set Indents")

**Headings**

EPUB files use headings to create the Table of Contents. I hadn't used this formatting style in my original document so I needed to go through and set each section (chapter titles, acknowledgements, and about the author) as a heading.

I did not like the style of the default heading in Pages, so I updated the font style and clicked the "Update" button that appears next to the Heading selector to save it for all headings.

![Headings](img/epub_headings.jpg "Headings")

**Images**

I have a stylized image on my Title Page. I chose to leave the image since it laid out as expected in the EPUB file, but I have seen eBooks that have chosen to either omit this page entirely, or just made it text only.

For my paperback file I used an image under the chapter titles and to denote time or point of view changes within each chapter. These did not layout properly in the EPUB file and rather than fight with them, I removed them entirely. 

I did not replace them with anything under the chapter title and instead just left it clean as that seems to be standard in eBooks anyway.

For section breaks within the chapters I replaced the images with a simple "\* \* *".

**Cover**

When you proceed to export your file you may want to include the cover image in the EPUB file. I'm not sure if this is necessary or not because each of the major distributers asked for the cover image when it was uploaded to their systems. You may find you want to include it if you intend to share your EPUB file directly with readers so that the cover is included. I used the same image I created using [Amazon's KDP requirements](https://kdp.amazon.com/en_US/help/topic/G200645690).

**Exporting the File**

You should be good to export your file as an EPUB file now by going to File - Export To - EPUB

The following export screen will appear where you can enter your Title and Author meta data as well as select the cover image.

![Export EPUB File](img/epub_export.jpg "Export EPUB File")

**Review the EPUB File**

Now you can open your EPUB file in Books. From here you can interact with your book like you would any other eBook file. You'll want to flip through all of the pages and make sure they all look as you expected. You'll also want to confirm the Table of Contents has the elements in it that you wanted and that any images you kept have laid out as expected. If you need to make some changes you can do so in the original file in Pages and then re-export the file to confirm again in Books. If you're happy with the file from here, then uploading to any of the major distributers listed above should be a breeze.