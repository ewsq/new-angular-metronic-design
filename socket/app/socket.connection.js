let rp           = require('request-promise'),
    certificates = require('../certificates'),
    https        = require('https'),
    io           = require('socket.io'),
    APIPHP       = 'https://api-php.mobyportal.com/api',
    uuid         = require('node-uuid');
class ApiPhpSocket {
    constructor()
    {
        this.timeoutId    = [];
        this.intervalId   = [];
        this.contSocket   = 0;
        this.io           = {};
        this.apps         = {};
        this.connectionId = [];
    }

    listenSocket(data)
    {
        let options = certificates.options;
        for (let i = 0; data.length > i; i++)
        {
            let cf       = data[i];
            this.apps[i] = https.createServer(options, this.serverHandler);
            this.io[i]   = io.listen(this.apps[i]);
            this.apps[i].listen(cf['port']);
            this.io[i].on('connection', this.ioConnectionHandler.bind(this, cf, i));
        }
    }

    ioConnectionHandler(cf, i, socket)
    {
        console.log('opened', socket.id, 'on event', cf['action']);
        this.connectionId.push(socket.id);
        socket.on(cf['action'], this.ioEventHandler.bind(this, socket, cf, i));
        socket.on(cf['action'] + '-close', this.ioOneConnectionDestroy.bind(this, socket, cf, i));
        socket.on("disconnect", this.ioConnectionDestroy.bind(this, socket, cf, i));
    }

    ioPingSocket(socket, cf)
    {
        this.appListenerSet(socket, cf['action'] + '-ping');
    }

    ioConnectionDestroy(socket, cf, i, data)
    {
        if (this.connectionId.indexOf(socket.id) !== -1)
        {
            this.connectionId.splice(1, this.connectionId.indexOf(socket.id));
            this.ioOneConnectionDestroy(socket, cf, i, data);
        }
    }

    ioOneConnectionDestroy(socket, cf, i, data)
    {
        console.log('closed', socket.id, 'on event', cf['action']);
        clearTimeout(this.intervalId[socket.id]);
        clearTimeout(this.timeoutId[socket.id]);
    }

    ioEventHandler(socket, cf, i, data)
    {
        this.ioPingSocket(socket, cf);
        let options               = {},
            params;
        options.json              = true;
        options.headers           = {
            'User-Agent': 'Request-Promise',
            'User-Client': 'Angular2',
            'Content-type': 'application/json',
            'x-requested-with': 'XMLHttpRequest'
        };
        params                    = data.params ? data.params.replace('.', '/') : '/';
        options.method            = data.type ? data.type : 'get';
        options.uri               = APIPHP + params;
        options.body              = data.body ? data.body : {};
        this.timeoutId[socket.id] = setTimeout(this.ioTimeEventHandler.bind(this, options, socket, cf, i), cf['timeaut']);
    }

    ioTimeEventHandler(options, socket, cf, i)
    {
        rp(options)
            .then(this.rpAppListenerThen.bind(this, socket, options, cf, i))
            .catch(this.rpAppListenerCatch.bind(this, socket, options, cf, i));
    }

    rpAppListenerThen(socket, options, cf, i, data)
    {
        this.rpAppListener(socket, options, 'emit-' + cf['action'], data, cf, i);
    }

    rpAppListenerCatch(socket, options, cf, i, err)
    {
        this.rpAppListener(socket, options, 'emit-' + cf['action'] + '-err', err, cf, i);
    }

    rpAppListener(socket, options, ac, d, cf, i)
    {
        console.log('listened', socket.id);
        if (socket.server.sockets.sockets[socket.id])
        {
            // console.log("ip: ", socket.request.connection.remoteAddress);
            // console.log("user-agent: ", socket.request.headers['user-agent']);
            this.intervalId[socket.id] = setTimeout(this.ioTimeEventHandler.bind(this, options, socket, cf), cf['interval']);
            this.appListenerSet(socket, ac, d);
        }
        else
        {
            this.ioOneConnectionDestroy(socket, options, i, d);
        }
    }

    appListenerSet(socket, ac, d)
    {
        ++this.contSocket;
        socket.emit(ac, d);
        // socket.emit(ac + '-ll', socket.request.headers);
    }

    serverHandler(req, res)
    {
        res.writeHead(500);
        res.end("undefined\n");
    }

    getParams()
    {
        return rp(APIPHP + '/params').then(this.rpThen.bind(this)).catch(this.rpCatch.bind(this));
    }

    rpThen(data)
    {
        this.listenSocket(JSON.parse(data));
    }

    rpCatch(err)
    {
        console.log(err);
    }

    static run()
    {
        return (new ApiPhpSocket()).getParams();
    }
}
return ApiPhpSocket.run();