$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$tscPath = Join-Path $repoRoot 'node_modules\.bin\tsc.cmd'
$liteServerPath = Join-Path $repoRoot 'node_modules\.bin\lite-server.cmd'

if (!(Test-Path $tscPath)) {
    throw "TypeScript compiler not found at $tscPath"
}

if (!(Test-Path $liteServerPath)) {
    throw "lite-server not found at $liteServerPath"
}

Push-Location $repoRoot

try {
    & $tscPath
    if ($LASTEXITCODE -ne 0) {
        exit $LASTEXITCODE
    }

    $watchProcess = Start-Process -FilePath $tscPath -ArgumentList '-w' -WorkingDirectory $repoRoot -PassThru

    try {
        & $liteServerPath
        $exitCode = $LASTEXITCODE
    }
    finally {
        if ($watchProcess -and -not $watchProcess.HasExited) {
            Stop-Process -Id $watchProcess.Id -Force
        }
    }

    exit $exitCode
}
finally {
    Pop-Location
}
