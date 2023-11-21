require 'jekyll_asset_pipeline'

module JekyllAssetPipeline
  class CssCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      YUI::CssCompressor.new.compress(@content)
    end
  end

  # class JavaScriptCompressor < JekyllAssetPipeline::Compressor
  #   require 'yui/compressor'
  #
  #   def self.filetype
  #     '.js'
  #   end
  #
  #   def compress
  #     YUI::JavaScriptCompressor.new(munge: true).compress(@content)
  #   end
  # end

  class JavaScriptCompressor < JekyllAssetPipeline::Compressor
    require 'closure-compiler'

    def self.filetype
      '.js'
    end

    def compress
      closure = Closure::Compiler.new(language_in: 'ES6')
      closure.compile(@content)
    end
  end
end
