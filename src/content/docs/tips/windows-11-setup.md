---
title: "Windows 11 Setup Guide"
date: "2024-01-01"
description: "Step-by-step guide to installing Windows 11 from scratch."
pageOrder: 1
---

## Step 1 — PC Health Check

Before installing, verify your PC meets the minimum requirements using Microsoft's **PC Health Check** tool. Pay special attention to:

- **TPM 2.0** — must be enabled in BIOS/UEFI
- **Secure Boot** — must be enabled
- **CPU** — 8th gen Intel / Ryzen 2000 or newer
- **RAM** — 4 GB minimum (8 GB+ recommended)
- **Storage** — 64 GB minimum

If your PC isn't officially supported, you can still install via the ISO + Registry bypass method described below.

## Step 2 — Download Windows 11 ISO + Ventoy

1. Download the **Windows 11 ISO** from Microsoft's official website.
2. Download **Ventoy** — a free open-source tool that creates a bootable USB drive. Unlike Rufus, Ventoy lets you copy the ISO file directly to the USB without reformatting each time.

## Step 3 — Installation

1. **Boot from USB**: Press `Shift + Restart` from Windows, or enter the BIOS boot menu and select your USB drive.
2. **Partition Management**: During installation, you can delete, format, or create partitions as needed. If upgrading, keep your existing partition structure.
3. Follow the on-screen prompts.

## Step 4 — OOBE Setup

After installation completes, walk through the Out-of-Box Experience:

- Sign in with a Microsoft account (or use a local account — requires disconnecting from Wi-Fi)
- Configure privacy settings
- Set up Windows Hello (PIN / fingerprint / face)

> [!TIP]
> After setup, run Windows Update immediately to install the latest drivers and security patches.
