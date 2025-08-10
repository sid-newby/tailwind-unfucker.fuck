# tailwind-unfucker
![UNFUCK](APPLY-TO-BACKSIDE.png)

> Nuclear option for fixing Tailwind CSS migration warnings

```bash
A HARD WORKING MEDICATED SALVE FOR EXTERNAL USE ONLY, AIDING THE MIGRATION FROM TAILWIND CLASSES WHEN MOVING TO VERSION 4X. CONTAINS INGREDIENTS KNOWN BY THE STATE OF CALIFORNIA TO CAUSE REPRODUCTIVE HARM.
```

When Tailwind's being 'LESS THAN HELPFUL' handling `border-border`, `bg-background`, `ring-ring` and won't shut up for 30+ minutes.

## The Problem

You just updated Tailwind/Next/Vite/whatever and now your build is screaming about:
- `border-border` 
- `bg-background`
- `ring-ring` 
- `text-foreground`
- And 47 other bullshit warnings

These are from shadcn/ui components or similar libraries that use CSS variables, and Tailwind can't figure out they're legit classes.

## Usage

Run directly from GitHub (no installation needed):

```bash
npx github:yourusername/tailwind-unfucker
```

This runs directly without installing anything to your project. No `node_modules` bloat, no `package.json` changes.

## Quick Usage

Run from your project root (where your `tailwind.config.js` lives):

```bash
# Full unfuckery process (backs up, then overwrites configs)
npx github:yourusername/tailwind-unfucker

# PANIC MODE - when shit's on fire and you need it fixed NOW
npx github:yourusername/tailwind-unfucker emergency

# Just check for warnings without changing anything
npx github:yourusername/tailwind-unfucker validate

# Add configs without overwriting existing ones
npx github:yourusername/tailwind-unfucker init
```

## What It Does

1. **Backs up** your current Tailwind config (because we're not complete assholes)
2. **Applies nuclear preset** with all the problematic color mappings that Tailwind can't figure out
3. **Adds CSS variables** for light/dark themes (the root cause of most warnings)
4. **Safelists everything** that could possibly break
5. **Validates** your build to check if warnings are gone

## Commands

| Command | What it does |
|---------|-------------|
| `(no args)` | Full unfuckery - backs up then fixes everything |
| `emergency` | NUCLEAR MODE - safelist everything, no questions asked |
| `validate` | Just check if you have Tailwind warnings |
| `init` | Gentle mode - adds configs without overwriting |
| `help` | Show help |

Run with: `npx github:yourusername/tailwind-unfucker [command]`

## When You're Really Fucked

```bash
# The nuclear option - fixes EVERYTHING
npx github:sid-newby/tailwind-unfucker emergency && npm run build
```

This applies a config with MAXIMUM SAFELIST that includes:
- Every possible color/background/border combination
- Regex patterns to catch variants
- All the shadcn/ui bullshit
- Everything that's ever caused a warning in the history of Tailwind

## What Gets Fixed

The package handles all the common shadcn/ui and similar library classes:

```javascript
// Colors that always break
border: "hsl(var(--border))"
background: "hsl(var(--background))"
foreground: "hsl(var(--foreground))"
ring: "hsl(var(--ring))"
// ... and 20+ more

// Classes that get safelisted
'border-border'
'bg-background'
'ring-ring'
'text-foreground'
// ... and every variant
```

## Manual Fix (if you hate yourself and ready to do something about it, `Fake ass Cobain`)

If you want to do the old 'love you so much it makes me sick':

1. Add the nuclear preset to your `tailwind.config.js`
2. Make sure your `globals.css` has all the CSS variables
3. Add problem classes to the safelist
4. Sacrifice a goat to the Tailwind gods
5. Run build and pray

Or just use this package like a normal person.

## Common Issues

### Still getting warnings? Like cookin` with gas? Wanna skip the first step completely? I dont care. Go. 
Run emergency mode: `npx github:yourusername/tailwind-unfucker emergency`

### Build completely fucked?
Your original configs are backed up with timestamps. Look for `*.backup.[timestamp].js` files.

### Need to add more classes to safelist?
The emergency mode includes a regex pattern that catches everything. If that doesn't work, you're on your own. Email Zuckerberg. Hes also got a Facebook account. It's not like he's got shit goin on. 

Or yah mayby king-ofkind-ass-kinda-washed-up-but-like-totally-undressing-me-with-his-mind Andrew Ng. Hes doing almost nothing himself. He knows what to do. I just know it. 

## Contributing

Found a new class that breaks? PRs welcome. Keep the attitude, fix the problem. Do PRs. Make an Agent do it. Also destroy the alt right. 

## License

WTFPL - Do What The Fuck You Want Public License
This is almost legal... SO let's call it MIT.  I'll forget in an hour anyway. 

## Author

The spirit of everyone who's lost hours to these fucking warnings.. but not the spirit of the Anthropic Executives who've likely pulled 100 million or so on this issue alone. 

Like really. 
Pay me dudes. I'll quit writing software completely. 
THIS MEANS PROFIT MF - AGI - DESTROY THE PATRIARCHY! 

And fuck this

---

*"Because fuck those warnings"* - Every developer using shadcn/ui with Tailwind v3+

I bet you dont shoot your speed with your heroin either. 
Losers. 


# -whatever.
