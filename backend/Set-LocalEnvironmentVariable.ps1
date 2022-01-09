[CmdletBinding()]
param (
)

$env:MongoDB_ConnectionUri = Get-Secret -Name 'Palfrey-MongoDB-ConnectionUri' -AsPlainText
