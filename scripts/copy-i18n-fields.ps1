param(
  [string]$PageName,
  [string]$FieldsYaml
)

$pagesDir = "C:\official\src\data\pages"
$enFile = "$pagesDir\$PageName.yaml"
$langDirs = @('ar','cs','da','de','el','es','fi','fr','it','nl','no','pl','pt','ro','ru','sv','th','tr','zh')

foreach ($lang in $langDirs) {
  $langFile = "$pagesDir\$lang\$PageName.yaml"
  if (Test-Path $langFile) {
     $content = Get-Content $langFile -Raw -Encoding UTF8
    # Check if the field already exists
    $fieldName = ($FieldsYaml -split ':' | Select-Object -First 1).Trim()
    if ($content -notmatch "^$fieldName:") {
      # Append before last non-empty line (before closing content)
      $content = $content.TrimEnd() + "`r`n`r`n$FieldsYaml`r`n"
       Set-Content $langFile $content -NoNewline -Encoding UTF8
      Write-Host "Updated: $lang\$PageName.yaml"
    } else {
      Write-Host "Skipped (exists): $lang\$PageName.yaml"
    }
  } else {
    Write-Host "Missing: $lang\$PageName.yaml"
  }
}
