$enFile = "C:\official\src\data\pages\academy.yaml"
$enContent = Get-Content $enFile -Raw -Encoding UTF8

# Extract the knowledge_center_* and knowledge_sections block + read_guide
$match = [regex]::Match($enContent, "(?s)(knowledge_center_tagline:.*?read_guide:.*)")
if (!$match.Success) { Write-Host "Could not find block in English file"; exit 1 }

$newBlock = $match.Value.TrimEnd()

$langDirs = @('ar','cs','da','de','el','es','fi','fr','it','nl','no','pl','pt','ro','ru','sv','th','tr','zh')

foreach ($lang in $langDirs) {
  $langFile = "C:\official\src\data\pages\$lang\academy.yaml"
  if (Test-Path $langFile) {
     $content = Get-Content $langFile -Raw -Encoding UTF8
    if ($content -match "knowledge_center_tagline:") {
      Write-Host "Skipped (exists): $lang\academy.yaml"
    } elseif ($content -match "(?s)(.*?)(cta:)") {
      $before = $matches[1].TrimEnd()
      $after = $matches[2]
      $newContent = $before + "`r`n`r`n" + $newBlock + "`r`n`r`n" + $after
       Set-Content $langFile $newContent -NoNewline -Encoding UTF8
       Write-Host "Updated: $lang\academy.yaml (inserted before cta)"
    } elseif ($content -match "(?s)^(.+)$") {
      # Append at end
      $newContent = $content.TrimEnd() + "`r`n`r`n" + $newBlock
       Set-Content $langFile $newContent -NoNewline -Encoding UTF8
       Write-Host "Updated: $lang\academy.yaml (appended at end)"
    }
  } else {
    Write-Host "Missing: $lang\academy.yaml"
  }
}
