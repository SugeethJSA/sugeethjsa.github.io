---
title: "Naming Scheme"
date: "2025-01-01"
description: "Documentation for the custom naming scheme logic in Spring PDF Tools."
---

Naming Scheme is a part of my shortcut that deals with the creation and management of custom naming schemes for files.

The current configuration of the shortcut is such that it constructs a name for a file with the help of parts. The part could be chosen from a pre-configured list or a text prompt; set up specifically during setup of naming scheme.

In naming scheme, the shortcut is first designed to set up lists, and then it is designed to set up text prompts asking for user input. Order of lists and prompts are as configured during set-up, and once configured, the order can not be changed.

The API is meant to be verbose, and it aligns with the Spring API philosophy. The philosophy will be published once I have the kinks straightened out, and only if I have time.

Reset / Setup API

To invoke this API, pass on this dictionary to the shortcut.

{

"Target Name":"Spring PDF Tools"

"Invoke":"Naming Scheme",

"Run":"Setup",

}

This will run setup using the inbuilt naming scheme module. The setup will only save the person's preferences after all input is completed; thus if invoked by accident during the reset process, it can be cancelled and original configuration files will still remain intact.

General Run

{

"Target Name":"Spring PDF Tools"

"Invoke":"Naming Scheme",

"Run":"General",

}

The general run of naming scheme module will request user input. In the current version of the shortcut, it can only pass back the name to the mother shortcut when the user presses the "Set File Name" option. The output is a dictionary targeting "Spring UI" (regard Spring UI as a filler, it kinda has no value. ).

Make PNG Images from PDF

This option will make the shortcut split any PDF into PNG images. There are multiple options available at the time of image generation.

Why PNG Images?

PNG images conserve as much raw data as possible, support transparent backgrounds and is generally a much less daunting task to accomplish.

Though we could force the image to render in JPEG, the result will be a lossy file which would have undergone huge processing in the CPU.

Configurations Available

Optimise File Size

You can choose to reduce the size of the PDF before it gets passed on to the renderer, so that the splitting PDF into COM Object Pages will not hog up CPU Space.

Size of output Image (aka Downsize PDF)

Generally, when PDF pages are converted into PNG images, the renderer renders the images at highest possible image resolution that the CPU can support. However, that would slow down shortcut execution.

So, it has been decided early on to give users the option to select their image height from a given list of image resolutions or render it at native resolution.

Stability is key while creating shortcuts, and this is one of the double-edged sword decisions that a Creator would have to take.

Share list

This share list that is presented after image generation gives a handy list of well-thought out options.

Add them to Photos Library

A lot of us generically like every photo to be at an arm’s reach… (let’s accept the fact that our Photos Library has become that junk yard of sorts.)

Select and Add them to Photos

Sometimes you’d just like to get a few pages of the PDF saved… so here’s the option to do just that!

Save to Files

Well, for the more organised people, you could definitely save the photos to a folder in the Files app.

Zip the photos into a file

A great win for portability, as it allows us to easily transfer the photos in a concise manner.

Share

For those other needs, such as sharing on social media, or to other storage apps, etc…

Make PDF

This is not your normal PDF creator tool, this one contains two modules:-

Make Readable PDF

This module aims to make a PDF with the given input, ensuring that selectable text can remain selectable even in the output.

Make Unreadable PDF
This module aims to make a PDF with the given input, turning selectable text into non-selectable modules. You can set the quality of each page, because each page is turned into an image before turning it back into a single PDF.

Create PDF from Master ZIP

PREREQUISITE: Create a zip file containing the other zip files before passing it to the shortcut. Only then the above option would work.

Pretty useful when you want to automate the making of a single PDF from a combination of ZIP files. This is a pretty niche use case.

This tool literally unzips the master zip → the unzips the zip inside each → then combines the object inside each zip file into a single PDF → Combine the different PDFs into one PDF

The tool maintains the order of the objects according to name:
E.g.: the zip of master zip file starting with A will be first; and in that, the object starting with A will be first.

Update History

Version 1.1

Hotfix for Version 1 (Released on January 02, 2025)
Reference: SID 2024-01-0201 (bug-fix)

An error was found within the setup part of Naming Scheme module where it could not save dictionaries in the intended format. This error was caused due to a change in the way Apple Shortcuts' Set Dictionary Action parses requests.

It has been a standard method to set a value for a sub-dictionary within a dictionary by the use of "xxx.yyy" where xxx is the main dictionary's key that references the sub-dictionary; and yyy is the sub-dictionary's key where a value could be saved.

However, in iOS 18, using the "." separator was not parsed in the above expected method. Instead of recognizing the regex value, shortcuts did not parse the "Key" part as regex anymore. Thus it ended up confusing the logic of the loop at multiple places in the shortcut. Thus, there was a slight overhaul of the setup module's list loop and text input prompt loop.
