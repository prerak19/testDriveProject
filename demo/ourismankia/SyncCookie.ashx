cookieSynced = true;var mfUuid = MotoFuze.Signals.getMotoFuzeCookie('mf_uuid'); if (mfUuid.length === 0 || mfUuid !== 'e09c5c94-d828-4d92-a27e-777ced848297') { var d = new Date(); d.setFullYear(d.getFullYear() + 1); var expires = 'Expires=' + d.toUTCString(); document.cookie = 'mf_uuid=e09c5c94-d828-4d92-a27e-777ced848297; ' + expires + '; Path=/; SameSite=None; Secure'; } 